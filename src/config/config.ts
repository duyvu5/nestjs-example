export const config = () => ({
  foundationKafka: {
    clientId: process.env.KAFKA_SERVICE_NAME || 'nestjs',
    brokers: process.env.KAFKA_BROKERS.split(',') || ['127.0.0.1:9092'],
  },
});
