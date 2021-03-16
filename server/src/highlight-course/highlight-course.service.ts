import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as moment from "moment";
import { HighlightCourse } from "src/shared/entities/highlight-course.entity";
import { Repository } from "typeorm";

@Injectable()
export class HighlightCourseService {
  constructor(
    @InjectRepository(HighlightCourse)
    private repository: Repository<HighlightCourse>
  ) {}

  async increaseScore(courseId: number, value: number = 1) {
    const qb = this.repository
      .createQueryBuilder()
      .insert()
      .into(HighlightCourse)
      .values(HighlightCourse.of(courseId, value));
    qb.expressionMap.onUpdate = {
      columns: 'score = score + :value'
    }
    qb.setParameters({ value });
    return qb.execute();
  }

  async topOfWeeks() {
    return this.repository.find({
      where: {
        year: moment().year(),
        week: moment().week()
      },
      order: {
        score: 'DESC'
      },
      take: 5
    })
  }
}