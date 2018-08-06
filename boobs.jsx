
export default class Boubs
{
    static ChangeEvents = [];
    static Data = {};
    static AddChangeEventWithArray(KeyValues,Func){
        KeyValues.forEach(Key=>{
            this.ChangeEvents.push({Key:Key,Func:Func})
        })

    }
    static AddChangeEventWithObject(Obj){
      let Keys = Object.keys(Obj);
        Keys.forEach(Key=>{
            Boubs.ChangeEvents.push({Key:Key,Func:Obj[Key]})
        })
    }

    static UpdateData(Obj){
        let Keys = Object.keys(Obj);
        Keys.forEach(Key=>{
            Boubs.Data[Key] = Obj[Key];
         })
        Keys.forEach(Key=>{
            Boubs.ChangeEvents.forEach(Event=>{
                let FuncData = {};
                FuncData[Key] = Boubs.Data[Key];
                if(Event.Key === Key) Event.Func(FuncData);
            })

        })
    }

}
