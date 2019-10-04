export class Hospital{
  public constructor(
    public id:string,
    public organizationId:string,
    public name :string,
    public description :string,
    public isactive:string,
    public createdby:string,
    public createddate:string,
    public modifiedby:string,
    public modifieddate:string,
    public organization:string
  ){}
}
