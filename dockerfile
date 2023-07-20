FROM node:alpine

RUN apk update
RUN apk add git
WORKDIR chronoxia-nft
RUN git clone https://ilhamgit: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@github.com/Mesail-Creative-Hub/chronoxia-nft.git . 
RUN npm i
RUN npm run build
CMD ["node", "server.js"]
EXPOSE 3000
