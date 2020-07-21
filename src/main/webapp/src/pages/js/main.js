// 导入 css
import "../css/main/main-css.css"

import $ from "jquery";
import * as template from "./template/template.js";

// 分类模板
function createTempletWithCategroy() {
    var typeSet = arguments[0];
    var results = arguments[1];
    if (typeSet != null) {
        typeSet.forEach(function (typeItem) {
            if (typeItem == "Movie") {
                template.movieTemplet(results);
            } else if (typeItem == "Video") {
                template.videoTemplet(results);
            } else if (typeItem == "Music") {
                template.musicTemplet(results);
            } else if (typeItem == "Restaurant") {
                template.waimaiTemplet(results);
            } else if (typeItem == "Product") {
                template.productTemplet(results);
            } else if (typeItem == "News") {
                template.newsTemplet(results);
            } else if (typeItem == "Coupon") {
                template.couponTemplet(results);
            }
        });
    }
}

// 不分类模板
function createTempletWithOutCategroy(data) {
    var categroy = "<div class=\"categroy all\">"
        + "		<div class=\"search-result\">"
        + "			<div class=\"categroy-panel\">"
        + "				<div align=\"center\">"
        + "					<span class=\"categroy-title\">电影</span>"
        + "				</div>";

    var sum = "";
    var count = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].type == "Movie") {
            ++count;
            if (count == 3) {
                sum += "<div class=\"more-movie\" style=\"display:none;\">";
            }

            var imgName = "";
            var title = "";
            var scoreWidth = "0%";
            var score = "暂无评分";
            var information = "";
            var introduction = "";
            var jumpUrl = "searchAction!jump.action?url=";
            var url = "";
            if (data[i].from_app != null && data[i].from_app != "") {
                var nameArr = data[i].from_app.split("_");
                if (nameArr.length == 1) {
                    imgName = data[i].from_app + ".png";
                } else {
                    for (var j = 1; j < nameArr.length; j++) {
                        imgName += nameArr[j] + ".";
                        if (j == nameArr.length - 1) {
                            imgName += "png";
                        }
                    }
                }
            }
            if (data[i].highLightTitle != null && data[i].highLightTitle != "") {
                title = data[i].highLightTitle;
            }
            if (data[i].score != null && data[i].score != "") {
                scoreWidth = (data[i].score / 5) * 100 + "%";
                score = data[i].score;
            }


            if (data[i].information != null && data[i].information != "") {
                information += "<div><span style=\"color:#666666;font-size:12px;\">" + data[i].information.split("主演")[0] + "</span></div>";
                information += "<div><span style=\"color:#666666;font-size:12px;\">" + "主演" + data[i].information.split("类型")[0].split("主演")[1] + "</span></div>";
            }


            if (data[i].introduction != null && data[i].introduction != "") {
                introduction = data[i].introduction;
            }

            if (data[i].webUrl != null && data[i].webUrl != "") {
                url = data[i].webUrl;
            }

            var item = "<div class='card-panel hoverable search-result'>"
                + "			<div><img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\"></div>"
                + "			<div class=\"card-content\">"
                + "				<div class=\"card-title\">"
                + "					<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">" + title + "</a>"
                + "				</div>"
                + "				<div class=\"starrating icon-star\">"
                + "					<span class=\"icon-star\" style=\"width:" + scoreWidth + ";\"></span>"
                + "				</div>"
                + "				<span style=\"color:#ffc30c;font-size:13px;\">" + score + "(豆瓣)" + "</span>"
                + "			</div>"
                + "			<div class=\"card-content\">"
                + information
                + "			</div>"
                + "			<div class='card-content'>"
                + "				<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>"
                + "			</div>"
                + "		</div>";
            sum += item;
        }
        if ((i == data.length - 1) && count >= 3) {
            sum += "<div class=\"tcdPageCode-movie\">"
                + "		<a href=\"javascript:;\" class=\"prevPage\">上一页</a>"
                + "		<a href=\"javascript:;\" class=\"tcdNumber\">1</a>"
                + "		<a href=\"javascript:;\" class=\"tcdNumber\">2</a>"
                + "		<span class=\"current\">3</span>"
                + "		<a href=\"javascript:;\" class=\"tcdNumber\">4</a>"
                + "		<span>...</span>"
                + "		<a href=\"javascript:;\" class=\"tcdNumber\">50</a>"
                + "		<a href=\"javascript:;\" class=\"nextPage\">下一页</a>"
                + "	</div>";
            sum += "</div>"; // class="more"的结束
            sum += "<div class=\"slide-movie\">"
                + "		<span class=\"slide-text-movie\">展开▾</span>"
                + "	</div>";
        }
    }
    categroy += sum;
    categroy += "	</div>"
        + "	</div>"
        + "</div>";

    $("#fulltext-search").append(categroy);

    var y = 0;
    $(".movie .categroy-panel .card-panel").each(function () {
        ++y;
        if (y >= 1 && y <= 5) {
            $(this).css("display", "block");
        } else {
            $(this).css("display", "none");
        }
    });

    $(".tcdPageCode-movie").createPage({
        pageCount: Math.ceil(count / 5),
        current: 1,
        backFn: function (p) {
            var z = 0;
            $(".movie .categroy-panel .card-panel").each(function () {
                ++z;
                if (z >= ((p - 1) * 5 + 1) && z <= 5 * p) {
                    $(this).css("display", "block");
                } else {
                    $(this).css("display", "none");
                }
            });
            //console.log(p);
        }
    });

    $(".slide-movie").click(function () {
        if ($(".more-movie").css("display") == "none") {
            $(".more-movie").slideDown();
            $(".slide-text-movie").text("折叠");
        } else {
            $(".more-movie").slideUp();
            $(".slide-text-movie").text("展开▾");
        }
    });
}

/* 搜索异步调用 */
function search() {
    var $searchQuery = $("#search-query");	// 用户搜索串
    var model = 0;	// 保留模板 1号表示不分类
    if ($searchQuery.val().trim() == "") {
        return;
    }
    var params = {
        "source": "me",
        "searchQuery": $searchQuery.val(),
        "typeName": "",
        "lat": "",
        "lon": "",
    };
    if (typeof (arguments[0]) != "undefined" && arguments[0] != "") {
        $("#result-categroy-title").text(arguments[0] + ":搜索结果");
        params["typeName"] = arguments[0];
    }
    if ($("#lat").val() != "" || $("#lat").val() != null) {
        params["lat"] = $("#lat").val();
    }
    if ($("#lon").val() != "" || $("#lon").val() != null) {
        params["lon"] = $("#lon").val();
    }
    $.ajax({
        /*url: "http://localhost:8080/MobileSearch/api/search!search.action",*/
        url: "http://60.205.139.71:8080/MobileSearch/api/search!search.action",
        /*url: "http://10.27.221.107/MobileSearch/api/search!search.action",*/
        type: "GET",
        dataType: "json",
        data: params,
        success: function (data) {
            $("#fulltext-search").empty();
            var results = data.results;
            var typeSet = new Set();

            // 如果搜索查询结果为空
            if (results.length == 0) {
                var noResults = "<span class=\"no-results\">很抱歉，我们没有查询到与\"" + $("#search-query").val() + "\"相关的结果</span>";
                $("#fulltext-search").append(noResults);
            }
            for (var x = 0; x < results.length; x++) {
                typeSet.add(results[x].type);
            }

            if (model == 0) {
                // 调用生成模板方法-分类
                createTempletWithCategroy(typeSet, results);
            } else {
                // 调用生成模板方法-不分类
                createTempletWithOutCategroy(typeSet);
            }
        },
        error: function (errorInfo, errorType) {
            alert("无法识别搜索串");
        }
    });
}

/* 获取参数 */
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}

/* 获取地理信息 */
function getLocation() {
    if (navigator.geolocation) {
        // 百度地图API功能  
        /*var map = new BMap.Map("container");  
        var point = new BMap.Point(116.331398,39.897445);  
        map.centerAndZoom(point,12); */
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                //var mk = new BMap.Marker(r.point);
                //map.addOverlay(mk);
                //map.panTo(r.point);
                var latText = "<input id=\"lat\" type=\"hidden\" value=\"" + r.point.lat + "\"/>";
                var lonText = "<input id=\"lon\" type=\"hidden\" value=\"" + r.point.lng + "\"/>";
                $(".body-main").append(latText);
                $(".body-main").append(lonText);
            } else {
                alert('瞬间爆炸，定位失败' + this.getStatus());
            }
        }, {enableHighAccuracy: true})
    }
}

$("document").ready(function () {
    getLocation();	// 获取地理位置
    var searchQuery = GetQueryString("searchQuery");
    $(".nav-category li a").each(function () {
        $(this).click(function () {
            search($(this).attr("class").split("-")[0]);
        });
    });

    if (searchQuery != null || searchQuery != "") {
        $("#search-query").val(searchQuery);
    }
    search();

});

$("#search-query").keydown(function (e) {
    var curKey = e.which;
    if (curKey == 13) {
        /* $("#回车事件按钮控件").click(); */
        search();
        return false;
    }
});
$("#search").click(function () {
    search();
});

var params = {
    "XOffset": 2, //提示框位置横向偏移量,单位px
    "YOffset": 0, //提示框位置纵向偏移量,单位px
    "width": 350, //提示框宽度，单位px
    "fontColor": "black", //提示框文字颜色
    "fontColorHI": "black", //提示框高亮选择时文字颜色
    "fontSize": "13px", //文字大小
    "fontFamily": "sans-serif", //文字字体
    "borderColor": "#757373", //提示框的边框颜色
    "bgcolorHI": "#b0aeae", //提示框高亮选择的颜色
    "sugSubmit": false //选中提示框中词条时是否提交表单
};

function confirmCallback() {

}