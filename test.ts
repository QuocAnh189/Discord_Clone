// {
//   "_id": "rs0",
//   "version": 1,
//   "members": [
//     { "_id": 1, "host": "mongo-primary:27017", "priority": 3 },
//     { "_id": 2, "host": "mongo-secondary-1:27017", "priority": 2 },
//     { "_id": 3, "host": "mongo-secondary-2:27017", "priority": 1 }
//   ]
// }

// version: "1.0.0"

// services:
//   mongo-primary:
//     container_name: mongo-primary
//     image: mongo
//     ports:
//       - 27001:27017
//     command: mongod --replSet "rs0"
//     environment:
//       # - MONGO_INITDB_REPLICASET=rs0
//       MONGO_INITDB_ROOT_USERNAME: root
//       MONGO_INITDB_ROOT_PASSWORD: QuocAnh-1809
//     volumes:
//       - ./mongodb/primary:/data/db
//     restart: always
//     networks:
//       - mongo_replica

//   mongo-secondary-1:
//     container_name: mongo-secondary-1
//     image: mongo
//     ports:
//       - 27002:27017
//     command: mongod --replSet "rs0"
//     volumes:
//       - ./mongodb/secondary1:/data/db
//     environment:
//       # - MONGO_INITDB_REPLICASET=rs0
//       MONGO_INITDB_ROOT_USERNAME: root
//       MONGO_INITDB_ROOT_PASSWORD: QuocAnh-1809
//     restart: always
//     networks:
//       - mongo_replica

//   mongo-secondary-2:
//     container_name: mongo-secondary-2
//     image: mongo
//     ports:
//       - 27003:27017
//     command: mongod --replSet "rs0"
//     volumes:
//       - ./mongodb/secondary2:/data/db
//     environment:
//       # - MONGO_INITDB_REPLICASET=rs0
//       MONGO_INITDB_ROOT_USERNAME: root
//       MONGO_INITDB_ROOT_PASSWORD: QuocAnh-1809
//     restart: always
//     networks:
//       - mongo_replica

// volumes:
//   mongo-primary:
//   mongo-secondary-1:
//   mongo-secondary-2:

// networks:
//   mongo_replica:
//     driver: bridge

// version: '3.1'
// services:
//   mongo:
//     build: ./mongodb_rs
//     restart: always
//     environment:
//       MONGO_INITDB_ROOT_USERNAME: anhquoc
//       MONGO_INITDB_ROOT_PASSWORD: QuocAnh-1809
//       MONGO_INITDB_DATABASE: discord
//       MONGO_REPLICA_HOST: 127.0.0.1
//       MONGO_REPLICA_PORT: 27017
//       MONGO_COMMAND: /usr/bin/mongo
//     ports:
//       - '27017:27017'
