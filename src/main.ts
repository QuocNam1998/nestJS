import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 1998);
}
bootstrap(); //set up the application and start listening on the specified port (default is 3000)
