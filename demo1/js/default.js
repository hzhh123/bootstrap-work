 $(function(){
    //设置侧边导航栏的panel-body高度
    setSidebarWidth();
    setView();
        $('#data').jstree({
             'core' : {
                'data' : [
                      { "text" : "根节点","icon":"fa fa-folder", "children" : [{
                        "text" : "子节点1","icon":"fa fa-folder", "children":[
                        { "text" : "子节点111" ,"icon":"fa fa-folder","children":[
                        { "text" : "子节点112","icon":"fa fa-file-text","children":[
                       {"text" : "子节点2","icon":"fa fa-file-text"},
                       {"text" : "子节点2","icon":"fa fa-file-text"},
                       {"text" : "子节点2","icon":"fa fa-file-text","children":[
                       {"text" : "子节点2","icon":"fa fa-file-text"},
                       {"text" : "子节点2","icon":"fa fa-file-text","children":[
                         { "text" : "子节点113","icon":"fa fa-file-text" },
                          { "text" : "子节点113","icon":"fa fa-file-text","children":[
                         { "text" : "子节点113","icon":"fa fa-file-text" },
                          { "text" : "子节点113","icon":"fa fa-file-text" }
                       ] }
                       ]}
                       ]}
                        ] },
                        { "text" : "子节点113","icon":"fa fa-file-text" }
                        ]},
                        { "text" : "子节点12","icon":"fa fa-file-text" }
                        ]
                    },{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ,{"text" : "子节点2","icon":"fa fa-file-text"}
                    ]}
                ]
            },
             plugins: ["wholerow" ]
             
        });
        
        // $('#data').on('activate_node.jstree',function(e,data){
        //     alert(data.selected.length);
        // }).jstree();


         $('#data').on('changed.jstree', function (e, data) {
          
            alert(data.instance.get_node(data.selected).a_attr.href);
          }) .jstree();
 

         //切换菜单
         $('#toggle-sidebar').on('click',function(){
            $(this).hide();
            $("#content").css({"marginLeft":50});
            $('#sidebar').css({"width":50});
            $('#data').hide();
            $('#sidebar .panel-footer span').hide();
            $('#sidebar .panel-footer').css({"width":50});
            setView();
            setSidebarWidth();
         })

         //展开sidebar
         $('#sidebar .toggle').on('click',function() {
            if($(window).width()>768){
            $('#toggle-sidebar').show();
            }
            $("#content").css({"marginLeft":250});
            $('#sidebar').css({"width":250});
            $('#data').show();
            $('#sidebar .panel-footer span').show();
            $('#sidebar .panel-footer').css({"width":250});
            $('#sidebar .panel-footer').css({"border-left":"1px solid #337ab7" });
            setSidebarWidth();
            setView();
         })

        $(window).resize(function(){
            setSidebarWidth();
            setView();
        })

        function setSidebarWidth(){
            var window_height=$(window).height();
            var panel_footer_height=$('#sidebar .panel-footer').height();
            var panel_header_height=$('#sidebar .panel-heading').height();
            $('#sidebar .panel-body').css({height:window_height-panel_header_height-panel_footer_height-45});
            $('#content').css({height:window_height});
        }
        function setView(){
           var window_width=$(window).width();
           var window_height=$(window).height();
           var navbar_height=$('.navbar').height();
           var footer_height=$('#footer').height();
           var sidebar_width=$('#sidebar').width();
           $('#tabbable .tab-content').css({width:window_width-sidebar_width});
           $('#tabbable .tab-content').css({height:window_height-navbar_height-footer_height});
        }

        $('#sidebar-setting li a').on('click',function(){
            var val=$(this).data('option');
            if($('#sidebar .panel').hasClass('panel-primary')||$('#sidebar .panel').hasClass('panel-default')||
                $('#sidebar .panel').hasClass('panel-warning')||$('#sidebar .panel').hasClass('panel-danger')||
                $('#sidebar .panel').hasClass('panel-info')){
               $('#sidebar .panel').removeClass('panel-primary');
               $('#sidebar .panel').removeClass('panel-default');
               $('#sidebar .panel').removeClass('panel-warning');
               $('#sidebar .panel').removeClass('panel-info');
               $('#sidebar .panel').removeClass('panel-danger');
               $('#sidebar .panel').addClass(val);
               if(val=='panel-primary'){
                $('#sidebar .panel-footer').css({ "border-color":"#337ab7"});
               }
               if(val=='panel-default'){
                $('#sidebar .panel-footer').css({ "border-color":"#ddd"});
               }
               if(val=='panel-warning'){
                $('#sidebar .panel-footer').css({ "border-color":"#faebcc"});
               }

               if(val=='panel-danger'){
                $('#sidebar .panel-footer').css({ "border-color":"#ebccd1"});
               }
               if(val=='panel-info'){
                $('#sidebar .panel-footer').css({ "border-color":"#bce8f1"});
               }

            }
        })
 });