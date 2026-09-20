import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NamesService } from "./names.service";
import { NamesController } from "./names.controller";
import { Name } from "./entities/name.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Name])],
  controllers: [NamesController],
  providers: [NamesService],
})
export class NamesModule {}
