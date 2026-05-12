import { PrismaClient, UserRole } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: { slug: "demo-desa" },
    update: {
      name: "Desa Demo",
      schemaName: "public",
    },
    create: {
      slug: "demo-desa",
      name: "Desa Demo",
      schemaName: "public",
    },
  });

  const passwordHash = await hash("admin12345", 10);

  await prisma.user.upsert({
    where: { email: "admin@desaklik.local" },
    update: {
      name: "Administrator Desa",
      tenantId: tenant.id,
      role: UserRole.ADMIN,
      passwordHash,
    },
    create: {
      email: "admin@desaklik.local",
      name: "Administrator Desa",
      tenantId: tenant.id,
      role: UserRole.ADMIN,
      passwordHash,
    },
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
