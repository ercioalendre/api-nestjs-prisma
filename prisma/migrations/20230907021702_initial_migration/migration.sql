-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "fullName" VARCHAR(64) NOT NULL,
    "nickname" VARCHAR(32),
    "email" VARCHAR(64) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "password" VARCHAR(64) NOT NULL,
    "token" VARCHAR NOT NULL,
    "status" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL,
    "createdBy" UUID,
    "updatedAt" TIMESTAMP(6),
    "updatedBy" UUID,
    "statusChangedAt" TIMESTAMP(6),
    "statusChangedBy" UUID,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_statusChangedBy_fkey" FOREIGN KEY ("statusChangedBy") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
