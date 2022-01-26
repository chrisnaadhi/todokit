-- CreateTable
CREATE TABLE "Todos" (
    "uid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "text" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("uid")
);
