
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


## MQTT

| Stat           | Avg       | Stdev     | Max    |
|----------------|-----------|-----------|--------|
| Latency        | 4.01 ms   | 5.24 ms   | 190 ms |
| Req/Sec        | 2,215.81  | 642.81    | 979    |
| Bytes/Sec      | 620 kB    | 180 kB    | 274 kB |
