import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateNameDto } from "./dto/create-name.dto";
import { UpdateNameDto } from "./dto/update-name.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Name } from "./name.entity";
import { Repository } from "typeorm";

@Injectable()
export class NamesService {
  private readonly names: CreateNameDto[] = [];
  constructor(@InjectRepository(Name) private nameRepo: Repository<Name>) {}

  create(createNameDto: CreateNameDto) {
    // this.names.push(createNameDto);
    // return createNameDto;
    return this.nameRepo.save(createNameDto);
  }

  findAll() {
    // return this.names;
    return this.nameRepo.find({ relations: { user: true } });
  }

  async findOne(id: number) {
    const data = await this.nameRepo.find({ where: { id: id } });
    console.log(data);
    if (data.length===0) {
      throw new NotFoundException(`no name found realated to this id-${id}`);
    }
    return data;
  }

  async update(id: number, updateNameDto: UpdateNameDto) {
    const data = await this.nameRepo.find({
      where: { id: id },
      relations: { user: true },
    });
    console.log(data);
    if (data.length===0) {
      throw new NotFoundException(`no name found realated to this id-${id}`);
    }

    return this.nameRepo.update(id, { ...updateNameDto });

    // this.names[index] = { ...this.names[index], ...updateNameDto };
    // return this.names[index];
  }

  async remove(id: number) {
    // const index = this.names.findIndex((curr) => curr.id == id);

    // if (index == -1) {
    //   throw new NotFoundException(`no name found realated to this id-${id}`);
    // }

    // this.names.splice(index, 1);
    // return `${id} was deleted`;
const info= await this.nameRepo.find({where : {id:id}})
if(info.length===0){
        throw new NotFoundException(`no name found realated to this id-${id}`);
}
console.log(info);

    return this.nameRepo.delete(id);
  }
}
