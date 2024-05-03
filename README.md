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

## Microservices

### TCP

| Stat           | Avg      | Stdev    | Max    | Max    |
|----------------|----------|----------|--------|--------|
| Latency        | 2.67 ms  | 5.58 ms  | 241 ms |        |
| Req/Sec        | 3,158.28 | 858.86   |        | 1,213  |
| Bytes/Sec      | 884 kB   | 241 kB   |        | 340 kB |


### gRPC

| Stat           | Avg       | Stdev    | Max    | Max    |
|----------------|-----------|----------|--------|--------|
| Latency        | 4.45 ms   | 4.19 ms  | 165 ms |        |
| Req/Sec        | 2,018.5   | 440.78   |        | 1,394  |
| Bytes/Sec      | 571 kB    | 125 kB   |        | 395 kB |

### Kafka

| Stat           | Avg      | Stdev     | Max     | Min     |
|----------------|----------|-----------|---------|---------|
| Latency        | 14.71 ms | 5.85 ms   | 58 ms   |         |
| Req/Sec        | 658.4    | 31.28     |         | 605     |
| Bytes/Sec      | 184 kB   | 8.76 kB   |         | 169 kB  |

### MQTT

| Stat           | Avg       | Stdev     | Max    | Min    |
|----------------|-----------|-----------|--------|--------|
| Latency        | 4.01 ms   | 5.24 ms   | 190 ms |        |
| Req/Sec        | 2,215.81  | 642.81    |        | 979    |
| Bytes/Sec      | 620 kB    | 180 kB    |        | 274 kB |

### NATS

| Stat           | Avg      | Stdev    | Max   | Min     |
|----------------|----------|----------|-------|---------|
| Latency        | 1.63 ms  | 1.97 ms  | 96 ms |         |
| Req/Sec        | 461.9    | 66.88    |       | 341     |
| Bytes/Sec      | 129 kB   | 18.7 kB  |       | 95.5 kB |

### RabbitMQ

| Stat           | Avg      | Stdev    | Max   | Min    |
|----------------|----------|----------|-------|--------|
| Latency        | 5.47 ms  | 1.93 ms  | 27 ms |        |
| Req/Sec        | 1,676.5  | 159.47   |       | 1,311  |
| Bytes/Sec      | 469 kB   | 44.7 kB  |       | 367 kB |

### Redis

| Stat           | Avg      | Stdev    | Max   | Min       |
|----------------|----------|----------|-------|-----------|
| Latency        | 4.49 ms  | 2.77 ms  | 47 ms |           |
| Req/Sec        | 2,011.2  | 489.59   |       | 1,084     |
| Bytes/Sec      | 563 kB   | 137 kB   |       | 304 kB    |


<div align="center" style="margin-top: 20px">
	<img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/519bfaf3-c242-431e-a269-876979f05574" alt="Nest.js" title="Nest.js"/>
	<img width="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
	<img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/>
	<img width="50" src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png" alt="Docker" title="Docker"/>
	<img width="50" src="https://user-images.githubusercontent.com/25181517/192107855-e669c777-9172-49c5-b7e0-404e29df0fee.png" alt="gRPC" title="gRPC"/>
	<img width="50" src="https://user-images.githubusercontent.com/25181517/192107004-2d2fff80-d207-4916-8a3e-130fee5ee495.png" alt="kafka" title="kafka"/>
	<img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/50342602-8025-4030-b492-550f2eaa4073" alt="RabbitMQ" title="RabbitMQ"/>
	<img width="50" src="https://user-images.githubusercontent.com/25181517/182884894-d3fa6ee0-f2b4-4960-9961-64740f533f2a.png" alt="redis" title="redis"/>
	<img width="50" src="https://github.com/Ramonmelod/profile-technology-icons/assets/139141993/b3064b7a-2027-4b95-b1c8-0b4a99e0b0b1" alt="MQTT" title="MQTT"/>
</div>


## Authors

- [Raj Ilyas](https://github.com/rajabovilyas)

