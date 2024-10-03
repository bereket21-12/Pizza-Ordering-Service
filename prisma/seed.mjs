import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create Permissions
  const seePizzaPermission = await prisma.permission.upsert({
    where: { id: 1 }, // Change according to your permission uniqueness
    update: {},
    create: {
      action: 'see',
      subject: 'Pizza',
    },
  });

  const orderPizzaPermission = await prisma.permission.upsert({
    where: { id: 2 }, // Change according to your permission uniqueness
    update: {},
    create: {
      action: 'order',
      subject: 'Pizza',
    },
  });

  // Create a Role for Customer
  const customerRole = await prisma.role.upsert({
    where: { id: 1 }, // Change according to your role uniqueness
    update: {},
    create: {
      name: 'Customer',
      permissions: {
        create: [
          { permissionId: seePizzaPermission.id },
          { permissionId: orderPizzaPermission.id },
        ],
      },
    },
  });

  console.log({ seePizzaPermission, orderPizzaPermission, customerRole });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
