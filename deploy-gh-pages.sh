#!/bin/bash

# Para o script se ocorrer qualquer erro
set -e

# Gera o build do projeto
yarn build

# Navega para a pasta build
cd build

# Inicializa um repositório Git na pasta build
git init

# Define a branch inicial como gh-pages
git checkout -b gh-pages

# Adiciona o repositório remoto
git remote add origin https://github.com/elevatte/elevatte.github.io.git

# Cria o arquivo CNAME com o conteúdo elevatte.me
echo "elevatte.me" > CNAME

# Adiciona os arquivos e faz o commit
git add .
git commit -m "Deploy to gh-pages"

# Força o push para a branch gh-pages
git push --force origin gh-pages

# Volta para a pasta raiz do projeto
cd ..
