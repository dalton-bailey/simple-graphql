-- CreateTable
CREATE TABLE "Holiday" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TEXT,
    "month" TEXT NOT NULL,
    "description" TEXT,
    "region" TEXT,

    PRIMARY KEY ("id")
);
