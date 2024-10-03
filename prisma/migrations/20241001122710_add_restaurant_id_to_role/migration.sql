/*
  Warnings:

  - Added the required column `subject` to the `Permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgurl` to the `Pizza` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Pizza` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgUrl` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restaurantId` to the `Role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_superAdminId_fkey";

-- AlterTable
ALTER TABLE "Permission" ADD COLUMN     "subject" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Pizza" ADD COLUMN     "imgurl" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "imgUrl" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ALTER COLUMN "superAdminId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "restaurantId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_id_fkey" FOREIGN KEY ("id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurant" ADD CONSTRAINT "Restaurant_superAdminId_fkey" FOREIGN KEY ("superAdminId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
