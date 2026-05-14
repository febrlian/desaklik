import { Injectable, Logger } from '@nestjs/common';
import * as handlebars from 'handlebars';

@Injectable()
export class TemplateParserService {
  private readonly logger = new Logger(TemplateParserService.name);

  constructor() {
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
  parse(template: string, data: Record<string, any /* eslint-disable-line @typescript-eslint/no-explicit-any */>): string {
    try {
      const compiledTemplate = handlebars.compile(template);
      return compiledTemplate(data);
    } catch (error) {
      this.logger.error(`Failed to parse template: ${(error as Error).message}`);
      throw new Error(`Template parsing failed: ${(error as Error).message}`);
    }
  }
}
