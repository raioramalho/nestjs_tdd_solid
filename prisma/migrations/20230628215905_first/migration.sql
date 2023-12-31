-- CreateTable
CREATE TABLE "USUARIO" (
    "CODUSU" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "EMAIL" TEXT NOT NULL,
    "SENHA" TEXT NOT NULL,
    "LOGADO" BOOLEAN NOT NULL,
    "INCLUSAO" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ALTERACAO" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "PESSOA" (
    "CODPES" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "NOME" TEXT NOT NULL,
    "SOBRENOME" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "TELEFONE" TEXT NOT NULL,
    "CODEND" INTEGER NOT NULL,
    "INCLUSAO" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ALTERACAO" DATETIME NOT NULL,
    CONSTRAINT "PESSOA_CODEND_fkey" FOREIGN KEY ("CODEND") REFERENCES "ENDERECO" ("CODEND") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ENDERECO" (
    "CODEND" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CEP" TEXT NOT NULL,
    "ENDERECO" TEXT NOT NULL,
    "NUMERO" INTEGER NOT NULL,
    "BAIRO" TEXT NOT NULL,
    "UF" TEXT NOT NULL,
    "ESTADO" TEXT NOT NULL,
    "COMPLEMENTO" TEXT NOT NULL,
    "INCLUSAO" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ALTERACAO" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "USUARIO_EMAIL_key" ON "USUARIO"("EMAIL");

-- CreateIndex
CREATE UNIQUE INDEX "PESSOA_CPF_key" ON "PESSOA"("CPF");

-- CreateIndex
CREATE UNIQUE INDEX "PESSOA_CODEND_key" ON "PESSOA"("CODEND");
