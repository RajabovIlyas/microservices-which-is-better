
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

| Stat           | Avg      | Stdev    | Max      |
|----------------|----------|----------|----------|
| Latency        | 2.67 ms  | 5.58 ms  | 241 ms   |
| Req/Sec        | 3,158.28 | 858.86   | 1,213    |
| Bytes/Sec      | 884 kB   | 241 kB   | 340 kB   |


## gRPC

| Stat           | Avg       | Stdev    | Max      |
|----------------|-----------|----------|----------|
| Latency        | 4.45 ms   | 4.19 ms  | 165 ms   |
| Req/Sec        | 2,018.5   | 440.78   | 1,394    |
| Bytes/Sec      | 571 kB    | 125 kB   | 395 kB   |
