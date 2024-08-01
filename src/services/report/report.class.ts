// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#custom-services
import type { Id, NullableId, Params, ServiceInterface } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { Application } from '../../declarations'
import type { Report, ReportData, ReportPatch, ReportQuery } from './report.schema'
import { query } from 'winston'

export type { Report, ReportData, ReportPatch, ReportQuery }

export interface ReportServiceOptions {
  app: Application
}

export interface ReportParams extends Params<ReportQuery> {
}

// This is a skeleton for a custom service class. Remove or add the methods you need here
export class ReportService<ServiceParams extends ReportParams = ReportParams>
  implements ServiceInterface<Report, ReportData, ServiceParams, ReportPatch> {


  constructor(public options: ReportServiceOptions) { }

  async find(_params?: ServiceParams): Promise<Report[]> {
    const { app } = this.options;
    const knex = app.get('mssqlClient');

    let rpt = 'Top5Users';
    let u = _params;
    //console.log(u?.query?.DonviId);
    let dv = 0;

    let r: Report[] = [];

    if (u?.query?.DonviId) {
      let dv1 = u?.query?.DonviId;
      dv = parseInt(dv1.toString());

      r = await knex.raw('exec tinhdiem_task ?', [dv]).then((result) => {

        result.forEach((item: any) => {
          r.push(item);
        });
        // console.log(r);
        return r;
      });
    } else {
      r = await knex.raw('exec tinhdiem_task ?', [0]).then((result) => {

        result.forEach((item: any) => {
          r.push(item);
        });
        // console.log(r);
        return r;
      });
    }
    return r;
  }
  async findTG(_params?: ServiceParams): Promise<Report[]> {
    const { app } = this.options;
    const knex = app.get('mssqlClient');

    let rpt = 'Top5Users';
    let u = _params;
    //console.log(u?.query?.DonviId);
    let dv = 0;
    let tuNgay = '';
    let denNgay = '';

    let r: Report[] = [];

    if (u?.query?.DonviId && u?.query?.tuNgay && u?.query?.denNgay) {
      let dv1 = u?.query?.DonviId;
      dv = parseInt(dv1.toString());
      let tn1 = u?.query?.tuNgay;
      tuNgay = tn1.toString();
      let dn1 = u?.query?.denNgay;
      denNgay = dn1.toString();

      r = await knex.raw('exec tinhdiem_task_tg ?, ?, ?', [dv, tuNgay, denNgay]).then((result) => {

        result.forEach((item: any) => {
          r.push(item);
        });
        // console.log(r);
        return r;
      });
    } else {
      r = await knex.raw('exec tinhdiem_task_tg ?, ?, ?', [0, tuNgay, denNgay]).then((result) => {

        result.forEach((item: any) => {
          r.push(item);
        });
        // console.log(r);
        return r;
      });
    }
    return r;
  }
  // findTop10UserPhong
  async findTop10UserPhong(_params?: ServiceParams): Promise<Report[]> {
    const { app } = this.options;
    const knex = app.get('mssqlClient');

    let rpt = 'Top10UsersPhong';
    let u = _params;
    //console.log(u?.query?.DonviId);
    let dv = 0;

    let r: Report[] = [];

    if (u?.query?.DonviId && u?.query?.PhongId) {
      let dv1 = u?.query?.DonviId;
      dv = parseInt(dv1.toString());
      let p1 = u?.query?.PhongId;
      let p = parseInt(p1.toString());

      r = await knex.raw('exec tinhdiem_userPhong_task ?, ?', [dv, p]).then((result) => {

        result.forEach((item: any) => {
          r.push(item);
        });
        // console.log(r);
        return r;
      });
    } else {
      r = await knex.raw('exec tinhdiem_userPhong_task ?, ?', [0, 0]).then((result) => {

        result.forEach((item: any) => {
          r.push(item);
        });
        // console.log(r);
        return r;
      });
    }
    return r;
  }
  // findTop10UserPhongTG
  async findTop10UserPhongTG(_params?: ServiceParams): Promise<Report[]> {
    const { app } = this.options;
    const knex = app.get('mssqlClient');

    let rpt = 'Top10UsersPhong';
    let u = _params;
    //console.log(u?.query?.DonviId);
    let dv = 0;
    let tuNgay = '';
    let denNgay = '';

    let r: Report[] = [];

    if (u?.query?.DonviId && u?.query?.PhongId && u?.query?.tuNgay && u?.query?.denNgay) {
      let dv1 = u?.query?.DonviId;
      dv = parseInt(dv1.toString());
      let p1 = u?.query?.PhongId;
      let p = parseInt(p1.toString());

      let tn1 = u?.query?.tuNgay;
      tuNgay = tn1.toString();
      let dn1 = u?.query?.denNgay;
      denNgay = dn1.toString();

      r = await knex.raw('exec tinhdiem_userPhong_task_tg ?, ?, ?, ?', [dv, p, tuNgay, denNgay]).then((result) => {

        result.forEach((item: any) => {
          r.push(item);
        });
        // console.log(r);
        return r;
      });
    } else {
      r = await knex.raw('exec tinhdiem_userPhong_task ?, ?, ?, ?', [0, 0, tuNgay, denNgay]).then((result) => {

        result.forEach((item: any) => {
          r.push(item);
        });
        // console.log(r);
        return r;
      });
    }
    return r;
  }
  async findByPhong(_params?: ServiceParams): Promise<Report[]> {
    const { app } = this.options;
    const knex = app.get('mssqlClient');

    let u = _params;
    //console.log(u?.query?.DonviId);
    let dv = 0;

    let r: Report[] = [];

    if (u?.query?.DonviId) {
      let dv1 = u?.query?.DonviId;
      dv = parseInt(dv1.toString());

      r = await knex.raw('exec tinhdiem_phong_task ?', [dv]).then((result) => {

        result.forEach((item: any) => {
          r.push(item);
        });

        return r;
      });
    } else {
      r = await knex.raw('exec tinhdiem_phong_task ?', [0]).then((result) => {

        result.forEach((item: any) => {
          r.push(item);
        });
        // console.log(r);
        return r;
      });
    }
    return r;
  }

  async findByPhongTG(_params?: ServiceParams): Promise<Report[]> {
    const { app } = this.options;
    const knex = app.get('mssqlClient');

    let u = _params;
    //console.log(u?.query?.DonviId);
    let dv = 0;
    let tuNgay = '';
    let denNgay = '';

    let r: Report[] = [];

    if (u?.query?.DonviId && u?.query?.tuNgay && u?.query?.denNgay) {
      let dv1 = u?.query?.DonviId;
      dv = parseInt(dv1.toString());
      let tn1 = u?.query?.tuNgay;
      tuNgay = tn1.toString();
      let dn1 = u?.query?.denNgay;
      denNgay = dn1.toString();

      r = await knex.raw('exec tinhdiem_phong_task_tg ?, ?, ?', [dv, tuNgay, denNgay]).then((result) => {

        result.forEach((item: any) => {
          r.push(item);
        });

        return r;
      });
    } else {
      r = await knex.raw('exec tinhdiem_phong_task_tg ?, ?, ?', [0, tuNgay, denNgay]).then((result) => {

        result.forEach((item: any) => {
          r.push(item);
        });
        // console.log(r);
        return r;
      });
    }
    return r;
  }

  // async get(id: Id, _params?: ServiceParams): Promise<Report> {
  //   return {
  //     id: 0,
  //     note: `A new message with ID: ${id}!`
  //   }
  // }

  // async create(data: ReportData, params?: ServiceParams): Promise<Report>
  // async create(data: ReportData[], params?: ServiceParams): Promise<Report[]>
  // async create(data: ReportData | ReportData[], params?: ServiceParams): Promise<Report | Report[]> {
  //   if (Array.isArray(data)) {
  //     return Promise.all(data.map((current) => this.create(current, params)))
  //   }

  //   return {
  //     id: 0,
  //     ...data
  //   }
  // }

  // // This method has to be added to the 'methods' option to make it available to clients
  // async update(id: NullableId, data: ReportData, _params?: ServiceParams): Promise<Report> {
  //   return {
  //     id: 0,
  //     ...data
  //   }
  // }

  // async patch(id: NullableId, data: ReportPatch, _params?: ServiceParams): Promise<Report> {
  //   return {
  //     id: 0,
  //     text: `Fallback for ${id}`,
  //     ...data
  //   }
  // }

  // async remove(id: NullableId, _params?: ServiceParams): Promise<Report> {
  //   return {
  //     id: 0,
  //     text: 'removed'
  //   }
  // }
}

export const getOptions = (app: Application) => {
  return { app }
}
