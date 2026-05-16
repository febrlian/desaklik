import { Injectable, Logger, Inject } from '@nestjs/common';
import * as crypto from 'crypto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import * as handlebars from 'handlebars';

@Injectable()
export class TemplateParserService {
  private readonly logger = new Logger(TemplateParserService.name);

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
    // Register custom helpers if needed
    handlebars.registerHelper('formatDate', (date: string) => {
      if (!date) return '';
      return new Date(date).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    });
  }

  /**
   * Compiles an HTML template string with dynamic variables.
   * @param template HTML string with handlebars syntax (e.g., {{name}})
   * @param data Object containing the variables to inject
   * @returns Compiled HTML string
   */
  async parse(template: string, data: Record<string, any /* eslint-disable-line @typescript-eslint/no-explicit-any */>): Promise<string> {
    try {
      const templateHash = crypto.createHash('sha256').update(template).digest('hex');
      const dataHash = crypto.createHash('sha256').update(JSON.stringify(data)).digest('hex');
      const cacheKey = `rendered_tpl_${templateHash}_${dataHash}`;

      const cachedRender = await this.cacheManager.get<string>(cacheKey);
      if (cachedRender) {
        return cachedRender;
      }

      const compiledTemplate = handlebars.compile(template);
      const render = compiledTemplate(data);

      await this.cacheManager.set(cacheKey, render, 3600000); // 1 hour TTL

      return render;
    } catch (error) {
      this.logger.error(`Failed to parse template: ${(error as Error).message}`);
      throw new Error(`Template parsing failed: ${(error as Error).message}`);
    }
  }
}
