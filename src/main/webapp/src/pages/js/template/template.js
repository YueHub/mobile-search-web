/* 电影模板 */
export function movieTemplet(data) {
    var categroy = "<div class=\"categroy movie\">"
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
};

/* 视频模板 */
export function videoTemplet(data) {

    var categroy = "<div class=\"categroy video\">"
        + "	<div class=\"search-result\">"
        + "		<div class=\"categroy-panel\">"
        + "			<div align=\"center\">"
        + "				<span class=\"categroy-title\">视频</span>"
        + "			</div>";

    var sum = "";
    var count = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].type == "Video") {
            ++count;
            if (count == 3) {
                sum += "<div class=\"more-video\" style=\"display:none;\">";
            }

            var imgName = "";
            var title = "";

            var writer = "";
            var description = "";
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

            if (data[i].writer != null && data[i].writer != "") {
                writer = data[i].writer;
            }

            if (data[i].description != null && data[i].description != "") {
                description = data[i].description;
            }

            if (data[i].webUrl != null && data[i].webUrl != "") {
                url = data[i].webUrl;
            }

            var item = "<div class='card-panel hoverable search-result'>"
                + "			<div><img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\"></div>"
                + "			<div class=\"card-content\">"
                + "				<div class=\"card-title\">"
                + "					<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">" + writer + "----" + title + "</a>"
                + "				</div>"
                + "			</div>"
                + "			<div class=\"card-content\">"
                + "				<p style=\"font-size:13px;\" class=\"summary\">"
                + "					<span style=\"color:#707070;\">"
                + description
                + "					</span>"
                + "				</p>"
                + "			</div>"
                + "			<div class='card-content'>"
                + "				<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>"
                + "			</div>"
                + "		</div>";
            sum += item;
        }
        if ((i == data.length - 1) && count >= 3) {
            sum += "<div class=\"tcdPageCode-video\">"
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
            sum += "<div class=\"slide-video\">"
                + "		<span class=\"slide-text-video\">展开▾</span>"
                + "	</div>";
        }
    }
    categroy += sum;
    categroy += "	</div>"
        + "	</div>"
        + "</div>";

    $("#fulltext-search").append(categroy);

    var y = 0;
    $(".video .categroy-panel .card-panel").each(function () {
        ++y;
        if (y >= 1 && y <= 5) {
            $(this).css("display", "block");
        } else {
            $(this).css("display", "none");
        }
    });

    $(".tcdPageCode-video").createPage({
        pageCount: Math.ceil(count / 5),
        current: 1,
        backFn: function (p) {
            var z = 0;
            $(".video .categroy-panel .card-panel").each(function () {
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

    $(".slide-video").click(function () {
        if ($(".more-video").css("display") == "none") {
            $(".more-video").slideDown();
            $(".slide-text-video").text("折叠");
        } else {
            $(".more-video").slideUp();
            $(".slide-text-video").text("展开▾");
        }
    });
};

/* 音乐模板 */
export function musicTemplet(data) {

};

/* 外卖模板 */
export function waimaiTemplet(data) {
    var categroy = "<div class=\"categroy waimai\">"
        + "		<div class=\"search-result\">"
        + " 			<div class=\"categroy-panel\">"
        + " 				<div align=\"center\">"
        + "					<span class=\"categroy-title\">外卖</span>"
        + " 				</div>";
    var sum = "";
    var count = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].type == "Restaurant") {
            ++count;
            if (count == 3) {
                sum += "<div class=\"more-waimai\" style=\"display:none;\">";
            }
            var imgName = "";
            var title = "";
            var scoreWidth = "0%";
            var score = "暂无评分";
            var right1 = "";
            var right2 = "";
            var desOrother = "";
            var address = "";
            var geoDistance = "";
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
            if (data[i].recent_order_num != null && data[i].recent_order_num != "") {
                right1 = " 月销量/" + data[i].recent_order_num;
            } else if (data[i].avg_price != null && data[i].avg_price != "") {
                right1 = " 人均/" + data[i].avg_price;
            }
            if (data[i].phone != null && data[i].phone != "") {
                right2 = "  联系电话:" + data[i].phone;
            } else if (data[i].city != null && data[i].city != "") {
                right2 = "  所在城市:" + data[i].city;
            }
            if (data[i].description != null && data[i].description != "" && typeof (data[i].description) != "undefined") {
                desOrother = data[i].description;
            } else {
                if (data[i].opening_hours != null && data[i].opening_hours != "" && typeof (data[i].opening_hours) != "undefined") {
                    desOrother += "营业时间:" + data[i].opening_hours + "<br/>";
                }
                if (data[i].recommend_item != null && data[i].recommend_item != "" && typeof (data[i].recommend_item) != "undefined") {
                    desOrother += "推荐:";
                    for (var k = 0; k < data[i].recommend_item.length; k++) {
                        desOrother += data[i].recommend_item[k] + "    ";
                    }
                    desOrother += "<br/>";
                }
            }
            if (data[i].address != null && data[i].address != "") {
                address = data[i].address;
            } else if (data[i].poi_address != null && data[i].poi_address != "") {
                address = data[i].poi_address;
            }
            if (data[i].geoDistance != null && data[i].geoDistance != "") {
                geoDistance = data[i].geoDistance;
            }

            if (data[i].webUrl != null && data[i].webUrl != "") {
                url = data[i].webUrl;
            }
            var item = "	<div class=\"card-panel hoverable search-result\">"
                + "		<div>"
                + "			<img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\">"
                + "		</div>"
                + "		<div class=\"card-content\">"
                + "			<div class=\"card-title\">"
                + "				<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">" + title + "</a>"
                + "			</div>"
                + "			<div class=\"starrating icon-star\" >"
                + "				<span class=\"icon-star\" style=\"width:" + scoreWidth + ";\"></span>"
                + "			</div>"
                + "			<span style=\"font-size:13px;color:#ffc30c;\"> " + score + "</span>"
                + "			<span style=\"color:#707070;font-size:10px;\">" + right1 + "</span>"
                + "			<span style=\"color:#707070;font-size:10px;\">" + right2 + "</span>"
                + "		</div>"
                + "		<div class=\"card-content\">"
                + "			<p style=\"font-size:13px;\" class=\"summary\">"
                + "				<span style=\"color:#707070;\">"
                + desOrother
                + "				</span>"
                + "			</p>"
                + "		</div>"
                + "		<div class=\"card-content\">"
                + "			<span style=\"color:#707070;font-size:11px;\">" + address + "</span>"
                + "			<span style=\"color:#ff6d00;font-size:11px;\">" + "  " + geoDistance + "</span>"
                + "			<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>"
                + "		</div>"
                + "	</div>";
            sum += item;
        }
        if ((i == data.length - 1) && count >= 3) {
            sum += "<div class=\"tcdPageCode-waimai\">"
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
            sum += "<div class=\"slide-waimai\">"
                + "		<span class=\"slide-text-waimai\">展开▾</span>"
                + "	</div>";
        }
    }
    categroy += sum;
    categroy += "	</div>"
        + "	</div>"
        + "</div>";
    $("#fulltext-search").append(categroy);

    var y = 0;
    $(".waimai .categroy-panel .card-panel").each(function () {
        ++y;
        if (y >= 1 && y <= 5) {
            $(this).css("display", "block");
        } else {
            $(this).css("display", "none");
        }
    });

    $(".tcdPageCode-waimai").createPage({
        pageCount: Math.ceil(count / 5),
        current: 1,
        backFn: function (p) {
            var z = 0;
            $(".waimai .categroy-panel .card-panel").each(function () {
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

    $(".slide-waimai").click(function () {
        if ($(".more-waimai").css("display") == "none") {
            $(".more-waimai").slideDown();
            $(".slide-text-waimai").text("折叠");
        } else {
            $(".more-waimai").slideUp();
            $(".slide-text-waimai").text("展开▾");
        }
    });
};

/* 商品模板 */
export function productTemplet(data) {
    var categroy = "<div class=\"categroy product\">"
        + "				<div class=\"search-result\">"
        + " 					<div class=\"categroy-panel\">"
        + " 						<div align=\"center\">"
        + "							<span class=\"categroy-title\">商品</span>"
        + " 						</div>";
    var sum = "";
    var count = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].type == "Product") {
            ++count;
            if (count == 3) {
                sum += "<div class=\"more-product\" style=\"display:none;\">";
            }
            var imgName = "";
            var title = "";
            var introduction = "";
            var tags = "TAGS:&nbsp;&nbsp;&nbsp;&nbsp;";
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
            if (data[i].introduction != null && data[i].introduction != "") {
                for (var k = 0; k < data[i].introduction.length; k++) {
                    if (k < 6) {
                        introduction += data[i].introduction[k] + "<br/>";
                    }
                }
            }
            if (data[i].tags != null && data[i].tags != "") {
                for (var l = 0; l < data[i].tags.length; l++) {
                    tags += data[i].tags[l].replace(/\s+/g, "") + "&nbsp;&nbsp;&nbsp;&nbsp;";
                }
            }
            if (data[i].webUrl != null && data[i].webUrl != "") {
                url = data[i].webUrl;
            }
            var item = "<div class=\"card-panel hoverable search-result\">"
                + "			<div>"
                + "				<img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\">"
                + "			</div>"
                + "			<div class=\"card-content\">"
                + "				<div class=\"card-title\">"
                + "					<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">" + title + "</a>"
                + "				</div>"
                + "			</div>"
                + "			<div class=\"card-content\">"
                + "				<div>"
                + "					<span style=\"color:#666666;font-size:12px;\">" + introduction + "</span>"
                + "				</div>"
                + "			</div>"
                + "			<div class=\"card-content\">"
                + "				<div>"
                + "					<span style=\"color:#ff6d00;font-size:10px;\">" + tags + "</span>"
                + "				</div>"
                + "				<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>"
                + "			</div>"
                + "		</div>";
            sum += item;
        }
        if ((i == data.length - 1) && count >= 3) {
            sum += "<div class=\"tcdPageCode-product\">"
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
            sum += "<div class=\"slide-product\">"
                + "		<span class=\"slide-text-product\">展开▾</span>"
                + "	</div>";
        }
    }
    categroy += sum;
    categroy += "	</div>"
        + "	</div>"
        + "</div>";
    $("#fulltext-search").append(categroy);

    var y = 0;
    $(".product .categroy-panel .card-panel").each(function () {
        ++y;
        if (y >= 1 && y <= 5) {
            $(this).css("display", "block");
        } else {
            $(this).css("display", "none");
        }
    });

    $(".tcdPageCode-product").createPage({
        pageCount: Math.ceil(count / 5),
        current: 1,
        backFn: function (p) {
            var z = 0;
            $(".product .categroy-panel .card-panel").each(function () {
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

    $(".slide-product").click(function () {
        if ($(".more-product").css("display") == "none") {
            $(".more-product").slideDown();
            $(".slide-text-product").text("折叠");
        } else {
            $(".more-product").slideUp();
            $(".slide-text-product").text("展开▾");
        }
    });
};

/* 新闻模板 */
export function newsTemplet(data) {
    var categroy = "<div class=\"categroy news\">"
        + "				<div class=\"search-result\">"
        + "					<div class=\"categroy-panel\">"
        + "						<div align=\"center\">"
        + "							<span class=\"categroy-title\">新闻</span>"
        + "						</div>";

    var sum = "";
    var count = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].type == "News") {
            ++count;
            if (count == 3) {
                sum += "<div class=\"more-news\" style=\"display:none;\">";
            }
            var imgName = "";
            var title = "";
            var content = "";
            var writer = "";
            var time = "";
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
            if (data[i].content != null && data[i].content != "") {
                content = data[i].content.length <= 60 ? data[i].content : data[i].content.substr(0, 60) + "....";
            }
            if (data[i].writer != null && data[i].writer != "") {
                writer = data[i].writer;
            }
            if (data[i].time != null && data[i].time != "") {
                time = data[i].time;
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
                + "			</div>"
                + "			<div class=\"card-content\">"
                + "				<p style=\"font-size:13px;\" class=\"summary\">"
                + "					<span style=\"color:#707070;\">"
                + content
                + "					</span>"
                + "				</p>"
                + "			</div>"
                + "			<div class='card-content'>"
                + "				<span style=\"color:#039be5;font-size:11px;\">" + writer + "   " + time + "</span>"
                + "				<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>"
                + "			</div>"
                + "		</div>";
            sum += item;
        }
        if ((i == data.length - 1) && count >= 3) {
            sum += "<div class=\"tcdPageCode-news\">"
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
            sum += "<div class=\"slide-news\">"
                + "		<span class=\"slide-text-news\">展开▾</span>"
                + "	</div>";
        }
    }
    categroy += sum;
    categroy += "	</div>"
        + "	</div>"
        + "</div>";

    $("#fulltext-search").append(categroy);

    var y = 0;
    $(".news .categroy-panel .card-panel").each(function () {
        ++y;
        if (y >= 1 && y <= 5) {
            $(this).css("display", "block");
        } else {
            $(this).css("display", "none");
        }
    });

    $(".tcdPageCode-news").createPage({
        pageCount: Math.ceil(count / 5),
        current: 1,
        backFn: function (p) {
            var z = 0;
            $(".news .categroy-panel .card-panel").each(function () {
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

    $(".slide-news").click(function () {
        if ($(".more-news").css("display") == "none") {
            $(".more-news").slideDown();
            $(".slide-text-news").text("折叠");
        } else {
            $(".more-news").slideUp();
            $(".slide-text-news").text("展开▾");
        }
    });
};

/* 团购模板 */
export function couponTemplet(data) {
    var categroy = "<div class=\"categroy coupon\">"
        + "				<div class=\"search-result\">"
        + " 					<div class=\"categroy-panel\">"
        + " 						<div align=\"center\">"
        + "							<span class=\"categroy-title\">团购</span>"
        + " 						</div>";
    var sum = "";
    var count = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].type == "Coupon") {
            ++count;
            if (count == 3) {
                sum += "<div class=\"more-coupon\" style=\"display:none;\">";
            }
            var imgName = "";
            var title = "";
            var scoreWidth = "0%";
            var score = "暂无评分";
            var right1 = "";
            var right2 = "";
            var desOrother = "";
            var address = "";
            var geoDistance = "";
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
            if (data[i].retail_price != null && data[i].retail_price != "") {
                right1 = "  零售价:" + data[i].retail_price;
            } else if (data[i].sale_count != null && data[i].sale_count != "") {
                right1 = "　　已销售" + data[i].sale_count;
            }
            if (data[i].price != null && data[i].price != "") {
                right2 = "  团购价:" + data[i].price;
            } else if (data[i].city != null && data[i].city != "") {
                right2 = "  所在城市:" + data[i].city;
            }
            if (data[i].deal_details != null && data[i].deal_details != "" && typeof (data[i].deal_details) != "undefined") {
                desOrother = data[i].deal_details.length <= 60 ? data[i].deal_details : data[i].deal_details.substr(0, 60) + "....";
            }
            if (data[i].poi_info.poi_address != null && data[i].poi_info.poi_address != "") {
                address = data[i].poi_info.poi_address;
            } else if (data[i].poi_info.poi_name != null && data[i].poi_info.poi_name != "") {
                address = data[i].poi_info.poi_name;
            }
            if (data[i].geoDistance != null && data[i].geoDistance != "") {
                geoDistance = data[i].geoDistance;
            }

            if (data[i].webUrl != null && data[i].webUrl != "") {
                url = data[i].webUrl;
            }
            var item = "	<div class=\"card-panel hoverable search-result\">"
                + "		<div>"
                + "			<img class=\"img-restaurant\" src=\"./imgs/apps/" + imgName + "\">"
                + "		</div>"
                + "		<div class=\"card-content\">"
                + "			<div class=\"card-title\">"
                + "				<a href=\"" + (jumpUrl + url) + "\" target=\"_blank\" style=\"color:#039be5;font-size:17px;\">" + title + "</a>"
                + "			</div>"
                + "			<div class=\"starrating icon-star\" >"
                + "				<span class=\"icon-star\" style=\"width:" + scoreWidth + ";\"></span>"
                + "			</div>"
                + "			<span style=\"font-size:13px;color:#ffc30c;\"> " + score + "</span>"
                + "			<span style=\"color:#707070;font-size:10px;\">" + right1 + "</span>"
                + "			<span style=\"color:#707070;font-size:10px;\">" + right2 + "</span>"
                + "		</div>"
                + "		<div class=\"card-content\">"
                + "			<p style=\"font-size:13px;\" class=\"summary\">"
                + "				<span style=\"color:#707070;\">"
                + desOrother
                + "				</span>"
                + "			</p>"
                + "		</div>"
                + "		<div class=\"card-content\">"
                + "			<span style=\"color:#707070;font-size:11px;\">" + address + "</span>"
                + "			<span style=\"color:#ff6d00;font-size:11px;\">" + "  " + geoDistance + "</span>"
                + "			<p class=\"cite\"><a href=\"" + (jumpUrl + url) + "\" style=\"color:#388e3c\">" + url + "</a></p>"
                + "		</div>"
                + "	</div>";
            sum += item;
        }
        if ((i == data.length - 1) && count >= 3) {
            sum += "<div class=\"tcdPageCode-coupon\">"
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
            sum += "<div class=\"slide-coupon\">"
                + "		<span class=\"slide-text-coupon\">展开▾</span>"
                + "	</div>";
        }
    }
    categroy += sum;
    categroy += "	</div>"
        + "	</div>"
        + "</div>";
    $("#fulltext-search").append(categroy);

    var y = 0;
    $(".coupon .categroy-panel .card-panel").each(function () {
        ++y;
        if (y >= 1 && y <= 5) {
            $(this).css("display", "block");
        } else {
            $(this).css("display", "none");
        }
    });

    $(".tcdPageCode-coupon").createPage({
        pageCount: Math.ceil(count / 5),
        current: 1,
        backFn: function (p) {
            var z = 0;
            $(".coupon .categroy-panel .card-panel").each(function () {
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

    $(".slide-coupon").click(function () {
        if ($(".more-coupon").css("display") == "none") {
            $(".more-coupon").slideDown();
            $(".slide-text-coupon").text("折叠");
        } else {
            $(".more-coupon").slideUp();
            $(".slide-text-coupon").text("展开▾");
        }
    });
};

/* 知识模板 */
