# boobs
A react object that will remove the need for redux and other bulky libraries


Very easy to use. No npm installs

Include the file every where you would need data.

```javascript
  import {UpdateData,AddChangeEventWithArray,AddChangeEventWithObject,GetData}  from 'boobs'
  
  //Add an event hook for when a particular data key changes
  //State is useful when you want to pass along parameters but not globlly
  AddChangeEventWithObject({Image2Seen: (Data,State)=>
            {
                if(State && State.ShouldSetSetState)
                {
                  this.setState(Data);
                }
            }
        });
        
```

# A little bit later

Update the Data
```javascript

  UpdateData({Image2Seen:true});
```  
or
```javascript  
  
 UpdateData({Image2Seen:true},{ShouldSetState:true});
```

You can also bind a lot of keys to one hook with 
```javascript

   AddChangeEventWithArray(["Image2Seen"], (Data,State)=>
            {
                this.setState(Data);
            }
        });
```

