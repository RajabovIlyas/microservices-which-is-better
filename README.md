
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

## NATS

| Stat           | Avg      | Stdev    | Max     |
|----------------|----------|----------|---------|
| Latency        | 1.63 ms  | 1.97 ms  | 96 ms   |
| Req/Sec        | 461.9    | 66.88    | 341     |
| Bytes/Sec      | 129 kB   | 18.7 kB  | 95.5 kB |
