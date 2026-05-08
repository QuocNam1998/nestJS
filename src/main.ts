import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips unknown fields automatically
      forbidNonWhitelisted: true, // returns 400 if unknown fields sent
      transform: true, // auto-transforms payloads to DTO class instances
    }),
  );
  const port = process.env.PORT ?? 1998;
  await app.listen(process.env.PORT ?? 1998, () => {
    console.log(`App is listening on port: ${port}`);
  });
}
void bootstrap(); //set up the application and start listening on the specified port (default is 3000)
