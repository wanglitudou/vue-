$(function(){
    var PostService = hmd.PostService();  
    var token = hmd.token;
     $("#headerLoad").load("../common/header.html");
    $("#footerLoad").load("../common/footer.html");
    var column = {}; //证书组
    var job = {};//工作经历组

    column[1] = {};
    job[1] = {};

    var column_ret =[];
   //省份 操作接口
    var strProvin = '';
    var Areaid = '';
    var strCity = '';
    var provinceSelect = '';
    var citySelect = '';
    PostService.provinceArea('','',function(response){
        if(response.code == 200){
            var provinList = response.data;
            if(provinList.length > 0){
                for(var i = 0; i < provinList.length; i++){
                    strProvin += '<option value="'+provinList[i].id+'">'+provinList[i].name+'</option>';
                }
                $('.jobProvince').html(strProvin);
                $(".jobProvince").prepend("<option value=''>请选择意向城市</option>");
                $(".jobProvince option").first().attr("selected", true);
                $("select").change(function(){
                   var option = $('.jobProvince option:selected'); //获取选中的项
                   provinceSelect = option.val();
                });
                $("select.jobProvince").change(function(){
                     Areaid = $(this).val();
                     data = {"province":Areaid}
                     PostService.provinceCity(data,'',function(response){
                        strCity = '';
                      if(response.code == 200){
                          var cityList = response.data;
                         
                          if(cityList.length > 0){
                            for(var i = 0; i < cityList.length; i++){
                              strCity += '<option value="'+cityList[i].id+'">'+cityList[i].name+'</option>';
                            }
                            $('.jobCity').html(strCity);
                           
                            $(".jobCity").prepend("<option value=''>请选择意向城市</option>");
                            $(".jobCity option").first().attr("selected", true);
                            $("select").change(function(){
                               var option = $('.jobCity option:selected'); //获取选中的项
                               citySelect = option.val();
                             });
                          }
                      }
                    });
                });
               
            }
        }
    })

  //证书操作
  function zsFun(num){
  var strColumnOne = '';
  var columeid = '';
  var strColumnTwo = '';
  PostService.getColumnFirst('','',function(response){
   
      if(response.code == 200){
          var getColumnFirstList = response.data.items;
          if(getColumnFirstList.length > 0){
              for(var i = 0; i < getColumnFirstList.length; i++){
                strColumnOne += '<option value="'+getColumnFirstList[i].cid+'">'+getColumnFirstList[i].ch_name+'</option>';
              }
              $('.columeFirst_'+num+'').html(strColumnOne);
              $(".columeFirst_"+num+"").prepend("<option value=''>请选择所获证书</option>");
              $(".columeFirst_"+num+" option").first().attr("selected", true);
              $("select.columeFirst_"+num+"").change(function(){
               //  $("select").change(function(){
           var option = $("select.columeFirst_"+num+" option:selected");
           var aaSelect = option.val();
           
           if(aaSelect){ //如果选中所获证书 展示下面列表
            $(".divStatus").css("display","block")
           }

           column[num]['column_id'] = aaSelect;
           console.log(column)
           
        //});
                   columeid = $(this).val();
                   if(columeid == 1 || columeid == 2){
                    
                    addValShowChose1();
                    $('.coumZS_'+num+'').show();
                    $('.coumZC_'+num+'').hide();
                 
                   }else{
                    
                    addValShowChose();
                    $('.coumZC_'+num+'').show();
                    $('.coumZS_'+num+'').hide();
                  
                   }
                   data = {"pid":columeid}
                   PostService.getColumnSecond(data,'',function(response){
                    strColumnTwo = '';
                    if(response.code == 200){
                        var getColumnTwoList = response.data.items;
                        if(getColumnTwoList.length > 0){
                          for(var i = 0; i < getColumnTwoList.length; i++){
                            strColumnTwo += '<option value="'+getColumnTwoList[i].cid+'">'+getColumnTwoList[i].ch_name+'</option>';
                          }
                          $('.columeTwo_'+num+'').html(strColumnTwo);
                          $(".columeTwo_"+num+"").prepend("<option value=''>请选择所获证书</option>");
                          $(".columeTwo_"+num+" option").first().attr("selected", true);
                        }else{
                            $('.columeTwo_'+num+'').html('');   
                        }
                    }
                  });
              });
             
          }
      }
  })
  
  }
  zsFun(1);
     //证书地址 操作接口
  function zsAddress(num){
     var strCoumProvin = '';
     var coumAreaid = '';
     var strCoumCity = '';
     PostService.provinceArea('','',function(response){
         if(response.code == 200){
             var provinList = response.data;
             if(provinList.length > 0){
                 for(var i = 0; i < provinList.length; i++){
                  strCoumProvin += '<option value="'+provinList[i].id+'">'+provinList[i].name+'</option>';
                 }
                 $('.coumProvince_'+num+'').html(strCoumProvin);
                 $(".coumProvince_"+num+"").prepend("<option value=''>请选择证书所在地</option>");
                 $(".coumProvince_"+num+" option").first().attr("selected", true);
                 $("select.coumProvince_"+num+"").change(function(){
                 var option = $("select.coumProvince_"+num+" option:selected"); //获取选中的项
                      var ccSelect = option.val();
                      column[num]['column_province'] = ccSelect;

                      coumAreaid = $(this).val();
                      data = {"province":coumAreaid}
                      PostService.provinceCity(data,'',function(response){
                        strCoumCity = '';
                       if(response.code == 200){
                           var cityList = response.data;
                           if(cityList.length > 0){
                             for(var i = 0; i < cityList.length; i++){
                              strCoumCity += '<option value="'+cityList[i].id+'">'+cityList[i].name+'</option>';
                             }
                             $('.coumCity_'+num+'').html(strCoumCity);
                             $(".coumCity_"+num+"").prepend("<option value=''>请选择证书所在地</option>");
                             $(".coumCity_"+num+" option").first().attr("selected", true);
                              $("select.coumCity_"+num+"").change(function(){
             
                             var option = $("select.coumCity_"+num+" option:selected"); //获取选中的项
                             var bbSelect = option.val();
                              column[num]['column_city'] = bbSelect;
                           });
                           }
                       }
                     });
                 });
                
             }
         }
     })
    }

    zsAddress(1);
   //职位名称
   var strJob = '';
   var jobSelect = '';
   PostService.getPosition('','',function(response){
    if(response.code == 200){
      var posList = response.data.items;
      if(posList.length > 0){
        for(var i = 0; i < posList.length; i++){
          strJob += '<option value="'+posList[i].cid+'">'+posList[i].name+'</option>';
        }
        $('.jobName').html(strJob);
        $(".jobName").prepend("<option value=''>请选择职位名称</option>");
        $(".jobName option").first().attr("selected", true);
        $("select").change(function(){
           var option = $('.jobName option:selected'); //获取选中的项
           jobSelect = option.val();
        });
     }
    }
 });

   //工作年限
   var strAge = '';
   var ageSelect = '';
   PostService.getWorkex('','',function(response){
    if(response.code == 200){
      var ageList = response.data;
      if(ageList.length > 0){
        for(var i = 0; i < ageList.length; i++){
          strAge += '<option value="'+ageList[i].id+'">'+ageList[i].name+'</option>';
        }
        $('.jobAge').html(strAge);
        $(".jobAge").prepend("<option value=''> 请选择工作年限 </option>");
        $(".jobAge option").first().attr("selected", true);
        $("select").change(function(){
           var option = $('.jobAge option:selected'); //获取选中的项
           ageSelect = option.val();
        });
     }
    }
 });

 //薪资
 var strSale = '';
 var saleSelect = '';
 PostService.getSale('','',function(response){
  if(response.code == 200){
    var saleList = response.data;
    if(saleList.length > 0){
      for(var i = 0; i < saleList.length; i++){
        strSale += '<option value="'+saleList[i].id+'">'+saleList[i].name+'</option>';
      }
      $('.jobSale').html(strSale);
      $(".jobSale").prepend("<option value=''> 请选择期望薪资 </option>");
      $(".jobSale option").first().attr("selected", true);
      $("select").change(function(){
           var option = $('.jobSale option:selected'); //获取选中的项
           saleSelect = option.val();
        });
   }
  }
});

//证书需求
var strPosition = '';
var strTPosition = '';
var Posid = ''; //证书id
 PostService.getPosition('','',function(response){
     if(response.code === 200){
         var PosList = response.data.items;
         if(PosList.length > 0){
             for(var i = 0; i < PosList.length; i++){
              strPosition += '<option value="'+PosList[i].cid+'">'+PosList[i].name+'</option>';
             }
             $('.zsOne').html(strPosition);
             $(".zsOne").prepend("<option value=''> 请选择一级证书 </option>");
             $(".zsOne option").first().attr("selected", true);
             $("select.zsOne").change(function(){
              var option = $('.zsOne option:selected'); //获取选中的项
              zsOneSelect = option.val();
              data = {"pid":zsOneSelect,"token":token}
              PostService.getSecPosition(data,'',function(response){
                strTPosition = '';
               if(response.code == 200){
                   var PosTList = response.data.items;
                   if(PosTList.length > 0){
                     for(var i = 0; i < PosTList.length; i++){
                      strTPosition += '<option value="'+PosTList[i].cid+'">'+PosTList[i].name+'</option>';
                     }
                     $('.zsTwo').html(strTPosition);
                     $(".zsTwo").prepend("<option value=''>请选择二级证书</option>");
                     $(".zsTwo option").first().attr("selected", true);
                     $("select").change(function(){
                        var option = $('.zsTwo option:selected'); //获取选中的项
                        zsTwoSelect = option.val();
                        Posid = zsTwoSelect; //赋值 二级职位需求
                     
                      });
                   }else{
                    $('.zsTwo').html('');
                    Posid = zsOneSelect;//赋值 一级职位需求
                   
                   }
               }
             });
         });
    
         } 
     }
 })
 
  //学历
 var strEdu = '';
 var eduSelect = '';
 PostService.getEduexp('','',function(response){
  if(response.code == 200){
    var eduList = response.data;
    if(eduList.length > 0){
      for(var i = 0; i < eduList.length; i++){
        strEdu += '<option value="'+eduList[i].id+'">'+eduList[i].name+'</option>';
      }
      $('.jobEdu').html(strEdu);
      $(".jobEdu").prepend("<option value=''> 请选择学历 </option>");
      $(".jobEdu option").first().attr("selected", true);
      $("select").change(function(){
           var option = $('.jobEdu option:selected'); //获取选中的项
           eduSelect = option.val();
        });
   }
  }
}); 

//招聘人数
var strPeople = '';
var peopleSelect = '';
PostService.getPeople('','',function(response){
 if(response.code == 200){
   var peopleList = response.data;
   if(peopleList.length > 0){
     for(var i = 0; i < peopleList.length; i++){
      strPeople += '<option value="'+peopleList[i].id+'">'+peopleList[i].name+'</option>';
     }
     $('.jobPeople').html(strPeople);
     $(".jobPeople").prepend("<option value=''> 请选择招聘人数 </option>");
     $(".jobPeople option").first().attr("selected", true);
     $("select").change(function(){
          var option = $('.jobPeople option:selected'); //获取选中的项
          peopleSelect = option.val();
       });
  }
 }
}); 

//证书状态
strZS = '<option value=""> 请选择证书状态</option><option value="1">初始注册</option><option value="2">转注册</option><option value="3">转注带B</option>';
$('.coumStatus_1').html(strZS);
$("select.coumStatus_1").change(function(){         
           var option = $("select.coumStatus_1 option:selected"); //获取选中的项
           var ddSelect = option.val();
            column[1]['column_status'] = ddSelect;
        });
//职称证性质
strXZ = '<option value=""> 请选择职称证性质 </option><option value="1">单证</option><option value="2">网查</option><option value="3">评审表</option><option value="4">红头文件</option>';
$('.zcStatus_1').html(strXZ);
$("select.zcStatus_1").change(function(){         
           var option = $("select.zcStatus_1 option:selected"); //获取选中的项
           var eeSelect = option.val();
            column[1]['column_type'] = eeSelect;
        });

//工作状态
var workStaSelect = '';
strZT = '<option value=""> 请选择当前状态 </option><option value="1">在职</option><option value="2">离职</option><option value="3">寻找机会</option>';
$('.workStatus').html(strZT);
$("select").change(function(){
           var option = $('.workStatus option:selected'); //获取选中的项
           workStaSelect = option.val();
        });








   //添加证书模块


   var indexCum = 1;

   $(".addZS").click(function(){
     indexCum += 1;
     column[indexCum] = {};
    var strForm = '<div class="inputForm">';
        strForm += '<div class="form-group"><label class="col-lg-3 control-label labelWidth">所获证书</label>';
        strForm += '<div class="col-lg-2"><select class="form-control columeFirst_'+indexCum+'" name="columeFirst">';
        strForm += '</select></div><div class="col-lg-2">';
        strForm += '<select class="form-control columeTwo_'+indexCum+'" name="country">';
        strForm += '</select></div></div>';
        strForm += '<div class="form-group"><label class="col-lg-3 control-label labelWidth">证书所在地</label>';
        strForm += '<div class="col-lg-2"> <select class="form-control coumProvince_'+indexCum+'" name="coumProvince">';
        strForm += '</select></div>';
        strForm += '<div class="col-lg-2"><select class="form-control coumCity_'+indexCum+'" name="coumCity">';
        strForm += '</select></div></div>';
        strForm += '<div class="form-group coumZS_'+indexCum+'"><label class="col-lg-3 control-label labelWidth">证书状态</label>';
        strForm += '<div class="col-lg-4">';
        strForm += '<select  class="form-control coumStatus_'+indexCum+'" name="coumStatus">';
        strForm += '</select></div></div>';
        strForm += '<div class="form-group coumZC_'+indexCum+'"><label class="col-lg-3 control-label labelWidth">职称证性质</label>';
        strForm += '<div class="col-lg-4"><select class="form-control zcStatus_'+indexCum+'" name="zcStatus">';
        strForm += '</select></div></div>';
        strForm += '<div class="delZS right"><img class="remuseImg" src="../style/images/delRem.jpg">删除证书奖项</div></div>';
        $("#addInput").append(strForm);
        addValShow();
        zsAddress(indexCum);
        zsFun(indexCum);
         //证书
        strZS = '<option value=""> 请选择证书状态</option><option value="1">初始注册</option><option value="2">转注册</option><option value="3">转注带B</option>';
        $('.coumStatus_'+indexCum+'').html(strZS);
        $("select.coumStatus_"+indexCum+"").change(function(){         
           var option = $("select.coumStatus_"+indexCum+" option:selected"); //获取选中的项
           var ddSelect = option.val();
            column[indexCum]['column_status'] = ddSelect;
        });
        //职称证性质
        strXZ = '<option value=""> 请选择职称证性质 </option><option value="1">单证</option><option value="2">网查</option><option value="3">评审表</option><option value="4">红头文件</option>';
        $('.zcStatus_'+indexCum+'').html(strXZ);
        $("select.zcStatus_"+indexCum+"").change(function(){         
           var option = $("select.zcStatus_"+indexCum+" option:selected"); //获取选中的项
           var ffSelect = option.val();
            column[indexCum]['column_type'] = ffSelect;
        });

         

        $(".delZS").click(function(){
          $(this).parent('.inputForm').remove();
          delete column[indexCum]; 
         
        });


   });
   var indexJum = 1;
 $(".addJL").click(function(){
              
    indexJum += 1;   
    job[indexJum] = {};
    var str = '<div class="inputForm">'+
              '<div class="form-group">'+
              '<label class="col-lg-3 control-label labelWidth">工作时间</label>'+
              '<div class="col-lg-2">'+
              '<div class="input-group date form_datetime1" data-link-format="yyyy-mm" data-date-format="MM yyyy" data-link-field="dtp_input'+(indexJum+1)+'">'+
              '<input style="padding:0 0 0 10px" class="form-control" name="timeData1" size="16" type="text" value="" >'+
              '<span class="input-group-addon"></span>'+
              '<span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>'+
              '</div>'+
              '<input type="hidden" id="dtp_input'+(indexJum+1)+'"  class="timeData1" value="" /><br/>'+
              '</div>'+
          '<div class="col-lg-2">'+
            '<div class="input-group date form_datetime2" data-link-format="yyyy-mm" data-date-format="MM yyyy" data-link-field="dtp_input_'+(indexJum+1)+'">'+
            '<input style="padding:0 0 0 10px" class="form-control" name="timeData2" size="16" type="text" value="" >'+
            '<span class="input-group-addon"></span>'+
            '<span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>'+
            '</div>'+
            '<input type="hidden" id="dtp_input_'+(indexJum+1)+'"  class="timeData2" value="" /><br/>'+
            '</div>'+
            '</div>'+
           
            '<div class="form-group">'+
              '<label class="col-lg-3 control-label labelWidth">公司名称</label>'+
              '<div class="col-lg-4">'+
              '<input style="padding:0 0 0 10px" class="form-control companyName" name="companyName" placeholder="请填写公司名称"/>'+
              '</div>'+
              '</div>'+
              '<div class="form-group">'+
              '<label class="col-lg-3 control-label labelWidth">所任职位</label>'+
               '<div class="col-lg-4">'+
               '<input style="padding:0 0 0 10px" class="form-control workJob" name="workJob" placeholder="请填写所任职位"/>'+
                '</div>'+
                '</div>'+
                 '<div class="form-group">'+
                  '<label class="col-lg-3 control-label labelWidth">工作业绩</label>'+
                   '<div class="col-lg-4">'+
              '<textarea class="textareaDiv form-control" rows="5" cols="20"></textarea>'+
                               '</div></div>'+
                               '<div class="delJL right"><img class="remuseImg" src="../style/images/delRem.jpg">删除工作经历</div>'
                            +'</div>';
            $("#date_div").append(str);
           

            $(".delJL").click(function(){
                $(this).parent('.inputForm').remove();
            });
              addJLValShow();
         
 })
 $("#date_div").on('focus','.form_datetime1',function(){
  $(this).datetimepicker({
        language: 'zh-CN',
        format: "yyyy-mm",
        autoclose: true,
        todayBtn: true,
        pickerPosition: "bottom-left",
        weekStart: 1,
        startView: 3,
        minView: 3,
        // forceParse : 0,
        // endDate : new Date()
    })
    // .on('hide', function(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
    //     var startTime =  $(".timeData1").val();
       
	// 	$(".timeData1").datetimepicker('setStartDate',startTime);
	// 	//$(".timeData1").val("");
	// });
 })

 $("#date_div").on('focus','.form_datetime2',function(){
    $(this).datetimepicker({
          language: 'zh-CN',
          format: "yyyy-mm",
          autoclose: true,
          todayBtn: true,
          pickerPosition: "bottom-left",
          weekStart: 1,
          startView: 3,
          minView: 3,
        //   forceParse : 0,
        //   endDate : new Date()
      })
    //   .on('hide', function(event) {
	// 	event.preventDefault();
	// 	event.stopPropagation();
    //     var endTime = $(".timeData2").val();
      
	// 	$(".timeData1").datetimepicker('setEndDate',endTime);
	// });

   
     
   })


  //添加简历 按钮提交
 $('#identifSaveForm').bootstrapValidator({
  　　　　　　fields: {
               jobName:{
                  validators: {
                        notEmpty: {
                            message: '*职位名称不能为空'
                        }
                    }
                },
                jobProvince:{
                  validators: {
                        notEmpty: {
                            message: '*意向城市不能为空'
                        }
                    }
                },
                jobCity:{
                  validators: {
                        notEmpty: {
                            message: '*意向城市不能为空'
                        }
                    }
                },
                jobAge:{
                  validators: {
                        notEmpty: {
                            message: '*工作年限不能为空'
                        }
                    }
                },
                jobSale:{
                  validators: {
                        notEmpty: {
                            message: '*期望薪资不能为空'
                        }
                    }
                },
                jobEdu:{
                  validators: {
                        notEmpty: {
                            message: '*学历不能为空'
                        }
                    }
                },
                workStatus:{
                  validators: {
                        notEmpty: {
                            message: '*当前状态不能为空'
                        }
                    }
                },
                columeFirst:{
                    validators: {
                          notEmpty: {
                              message: '*所获证书不能为空'
                          }
                      }
                  },
                  coumProvince:{
                    validators: {
                          notEmpty: {
                              message: '*证书所在地省份不能为空'
                          }
                      }
                  },
                  coumCity:{
                    validators: {
                          notEmpty: {
                              message: '*证书所在地城市不能为空'
                          }
                      }
                  },
                
              }
                }).on("success.form.bv",function(e){
                  e.preventDefault();
                  var timeStartRes=[];//开始时间
                  $(".timeData1").each(function(){
                    timeStartRes.push($(this).val());
                  });
                 
                  var timeEndRes=[];//结束时间
                  $(".timeData2").each(function(){
                    timeEndRes.push($(this).val());
                  });
                
                  var comRes=[]; //公司名称
                  $(".companyName").each(function(){
                    comRes.push($(this).val());
                   
                  });

                  var workRes=[];//职位
                  $(".workJob").each(function(){
                    workRes.push($(this).val());
                  });
                  
                  var yjRes=[];//工作业绩
                  $(".textareaDiv").each(function(){
                    yjRes.push($(this).val());
                  });
                            
                     
                      var arrJob = [];
                      for(var k = 0; k < comRes.length; k++){
                        console.log(comRes[k])

                        arrJob[k] = {};
                        arrJob[k]['comany_name'] = comRes[k];
                        arrJob[k]['job_name'] = workRes[k];
                        arrJob[k]['job_contents'] = yjRes[k];
                        arrJob[k]['job_start_time'] = timeStartRes[k];//开始时间
                        arrJob[k]['job_end_time'] = timeEndRes[k];//结束时间
                      }
                      console.log(arrJob)

                   for(var v in column){
                      var t = {};
                      t['column_id'] = column[v]['column_id']==null?'':column[v]['column_id'];
                      t['column_province'] = column[v]['column_province']==null?'':column[v]['column_province'];
                      t['column_status'] = column[v]['column_status']==null?'':column[v]['column_status'];
                      t['column_type'] = column[v]['column_type']==null?'':column[v]['column_type'];

                       column_ret.push(t);

                    }
                     
                  
                   data = {"token":token,"inten_job":jobSelect,"inten_province":provinceSelect,"inten_city":citySelect,"work_experience_time":ageSelect,"expect_salary":saleSelect,"education":eduSelect,"work_status":workStaSelect,"column":column_ret,"job":arrJob}
                   PostService.addResume(data,'',function(response){
                        if(response.code == 200){
                          PostService.sweetalert('简历发布成功');
                        }else{
                          PostService.sweetalert(response.message);
                        }
        
                    })
                  
                });



  //通过侦听输入框，实时显示输入字符
     
   $(".gs").html(0);
   $("#titRemuse").on("input propertychange",function(){
    
      var input_value = document.getElementById('titRemuse').value;
      var len = input_value.length;
      if(len > 30){
        return false;
      }else{
        $(".gs").html(len);
      }

    })

     //添加招聘信息
     $('#creatRemuseSaveForm').bootstrapValidator({
      　fields: {
          remTit:{
            validators: {
                  notEmpty: {
                      message: '*标题不能为空'
                  }
              }
          },
          jobName:{
            validators: {
                  notEmpty: {
                      message: '*职位名称不能为空'
                  }
              }
          },
          jobProvince:{
            validators: {
                  notEmpty: {
                      message: '*招聘地区不能为空'
                  }
              }
          },
          jobCity:{
            validators: {
                  notEmpty: {
                      message: '*招聘城市不能为空'
                  }
              }
          },
          jobAge:{
            validators: {
                  notEmpty: {
                      message: '*年限需求不能为空'
                  }
              }
          },
          jobEdu:{
            validators: {
                  notEmpty: {
                      message: '*学历不能为空'
                  }
              }
          },
          jobSale:{
            validators: {
                  notEmpty: {
                      message: '*薪资待遇不能为空'
                  }
              }
          },
          jobPeople:{
            validators: {
                  notEmpty: {
                      message: '*招聘人数不能为空'
                  }
              }
          },
          
      }　　　  　　
              
    }).on("success.form.bv",function(e){
      var titRemuse = document.getElementById('titRemuse').value;
      var textRemuse = document.getElementById('textareaId').value;
      data = {"token":token,"inten_job":jobSelect,"resume_title":titRemuse,"inten_province":provinceSelect,"inten_city":citySelect,"work_experience_time":ageSelect,"expect_salary":saleSelect,"education":eduSelect,"job_people_num":peopleSelect,"job_desc":textRemuse,"job_cert":Posid}
      PostService.addResume(data,'',function(response){
           if(response.code == 200){
             PostService.sweetalert('招聘发布成功');
           }else{
             PostService.sweetalert(response.message);
           }

       })
      
    });

    //添加证书 追加验证
    function addValShow() {
        $("#identifSaveForm").bootstrapValidator("addField", "columeFirst", {
            validators: {
                notEmpty: {
                    message: '所获证书不能为空'
                },
            
            }
        });
     
        $("#identifSaveForm").bootstrapValidator("addField", "coumProvince", {
            validators: {
                notEmpty: {
                    message: '所获证书省份不能为空'
                },
             
            }
        });

        $("#identifSaveForm").bootstrapValidator("addField", "coumCity", {
            validators: {
                notEmpty: {
                    message: '所获证书城市不能为空'
                },
             
            }
        });
    }

    
    //选择性校验 证书性质
    function addValShowChose() {
        $("#identifSaveForm").bootstrapValidator("addField", "zcStatus", {
            validators: {
                notEmpty: {
                    message: '所获证书性质不能为空'
                },
             
            }
        });
    }

    //选择性校验 证书状态
    function addValShowChose1() {
        $("#identifSaveForm").bootstrapValidator("addField", "coumStatus", {
            validators: {
                notEmpty: {
                    message: '所获证书状态不能为空'
                },
             
            }
        });
    }


     //添加经历 追加验证
     function addJLValShow() {
        $("#identifSaveForm").bootstrapValidator("addField", "companyName", {
            validators: {
                notEmpty: {
                    message: '公司名称不能为空'
                },
            
            }
        });
     
        $("#identifSaveForm").bootstrapValidator("addField", "workJob", {
            validators: {
                notEmpty: {
                    message: '所任职位不能为空'
                },
             
            }
        });

        $("#identifSaveForm").bootstrapValidator("addField", "timeData1", {
            validators: {
                notEmpty: {
                    message: '开始时间不能为空'
                },
             
            }
        });

        $("#identifSaveForm").bootstrapValidator("addField", "timeData2", {
            validators: {
                notEmpty: {
                    message: '结束时间不能为空'
                },
             
            }
        });
    }
});