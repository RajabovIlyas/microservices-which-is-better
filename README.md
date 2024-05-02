
# Which microservice is better to use?

This project was created purely for informational purposes to determine which microservice communication is best to use and when.



## Run Locally

Clone the project

```bash
  git clone https://github.com/RajabovIlyas/microservices-which-is-better.git
```

Go to the project directory

```bash
  cd microservices-which-is-better
```

Start servers

```bash
  docker-compose up --build
```


## Authors

- [Raj Ilyas](https://github.com/rajabovilyas)


## TCP

| Stat           | Avg      | Stdev    | Max    | Min    |
|----------------|----------|----------|--------|--------|
| Latency        | 2.67 ms  | 5.58 ms  | 241 ms |        |
| Req/Sec        | 3,158.28 | 858.86   |        | 1,213  |
| Bytes/Sec      | 884 kB   | 241 kB   |        | 340 kB |


## Kafka

| Stat           | Avg      | Stdev     | Max     | Min     |
|----------------|----------|-----------|---------|---------|
| Latency        | 14.71 ms | 5.85 ms   | 58 ms   |         |
| Req/Sec        | 658.4    | 31.28     |         | 605     |
| Bytes/Sec      | 184 kB   | 8.76 kB   |         | 169 kB  |
