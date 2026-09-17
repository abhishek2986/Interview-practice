import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateNameDto } from "./dto/create-name.dto";
import { UpdateNameDto } from "./dto/update-name.dto";

@Injectable()
export class NamesService {
  private readonly names: CreateNameDto[] = [];

  create(createNameDto: CreateNameDto): CreateNameDto {
    this.names.push(createNameDto);
    return createNameDto;
  }

  findAll(): CreateNameDto[] {
    return this.names;
  }

  findOne(id: number): CreateNameDto {
    const data = this.names.find((curr) => curr.id == id);

    if (!data) {
      throw new NotFoundException(`no name found realated to this id-${id}`);
    }

    return data;
  }

  update(id: number, updateNameDto: UpdateNameDto): CreateNameDto {
    const index = this.names.findIndex((curr) => curr.id == id);

    if(index === -1) {
      throw new NotFoundException(`no name found realated to this id-${id}`);
    }

    this.names[index] = { ...this.names[index], ...updateNameDto };
    return this.names[index];
  }

  remove(id: number): string {
    const index = this.names.findIndex((curr) => curr.id == id);

    if (index == -1) {
      throw new NotFoundException(`no name found realated to this id-${id}`);
    }

    this.names.splice(index, 1);
    return `${id} was deleted`;
  }

}
