var array = [120259084288,63763084476416,140735340871680,70368209387520,140737463181312,109951162773504,76965813942272,10995116277504,1099511627664,824633720816,549755813872,137438953456,21474836472,5368709116,4831838192,66846712,7372784,1056752,8188,16382,8184,3840];
			for(i=0;i<array.length;i++){
                console.log(((Array(48).join("0") + array[i].toString(2)).substr(-48)).replace(/1/g,"#").replace(/0/g,' '));
            }