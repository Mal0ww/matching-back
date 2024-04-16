-- CreateTable
CREATE TABLE "Login" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "senha" VARCHAR(250) NOT NULL,

    CONSTRAINT "Login_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Login_id_key" ON "Login"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Login_email_key" ON "Login"("email");
