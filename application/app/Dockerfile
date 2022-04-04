FROM node:16.14.2-alpine3.14

# Diretório dentro do container
WORKDIR /usr/node

ENV PATH=/usr/node/node_modules/.bin:$PATH

# Copia os arquivos para dentro do container de acordo com a variável WORKDIR
COPY package.json ./

# executa um comando
RUN yarn

WORKDIR /usr/node/app

# Copia todos os arquivos
# COPY .env /
COPY tsconfig.json ./
COPY src ./src

RUN yarn global add pm2

# qual porta do container será exposta
EXPOSE 3000

# deve ser única para cada dockerfile, responsável por iniciar o serviço
CMD [ "yarn", "dev" ]

# comando de build: docker build -t <image-name> . 
# o ponto é da pasta de localização do arquivo Dockerfile
# comando de execução: docker run -p 3000:3000 --name <container-name> -d <image-name>
# [portaLocal:portaContainer]