import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BookMiddleware } from "./book/book.middleware";
import { NamesModule } from "./names/names.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MessageModule } from "./message/message.module";
import { UserModule } from "./User/user.module";
import { dataSourceOptions } from "./datasource";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    NamesModule,
    TypeOrmModule.forRoot({...dataSourceOptions}),
    MessageModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BookMiddleware).forRoutes("*");
  }
}
