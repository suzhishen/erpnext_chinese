(()=>{$(document).on("page-change",function(){setTimeout(function(){if(frappe.boot.lang=="zh"&&frappe.get_route()&&(frappe.get_route().at(-1)=="Workspaces"||frappe.get_route()[0]=="Workspaces")){let t=[["Reports &amp; Masters","\u529F\u80FD\u62A5\u8868"],["Reports & Masters","\u529F\u80FD\u62A5\u8868"],["Elements","\u5143\u7D20"],["Quick Access","\u5FEB\u6377\u65B9\u5F0F"],["Your Shortcuts","\u5FEB\u6377\u65B9\u5F0F"],["Settings","\u8BBE\u7F6E"]];$.each(t,function(o,e){$('div.ce-block__content span b:contains("'+e[0]+'")').html(e[1])})}},1e3)});})();
//# sourceMappingURL=erpnext_chinese.bundle.FS24AIPO.js.map
