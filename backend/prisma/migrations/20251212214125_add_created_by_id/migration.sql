-- AlterTable
ALTER TABLE "Sweet" ADD COLUMN     "createdById" INTEGER;

-- AddForeignKey
ALTER TABLE "Sweet" ADD CONSTRAINT "Sweet_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
