/*
 * @ author Leo
 * 表單驗證 JS
 */
$(document).ready(function(){
    var initializer = new Initializer(),
        // 要對照的欄位表
        columnList = [
            "name", "birthday", "phone", "email", "shop", "agreement"
        ],
        columnListLength = columnList.length,
        // 如果出現對照的欄位，在這裡就要加上要驗證的規則
        // 要特別加入驗證 function 到 isLegalInput 加入判斷式
        columnRule = {
            "name"      : {"checkAttribute" : "value",   "wrongValue" : "",    "wrongRule" : "EmptyText"},
            "birthday"  : {"checkAttribute" : "value",   "wrongValue" : "",    "wrongRule" : "EmptyText"},
            "phone"     : {"checkAttribute" : "value",   "wrongValue" : "",    "wrongRule" : "EmptyText"},
            "email"     : {"checkAttribute" : "value",   "wrongValue" : "",    "wrongRule" : "EmptyText"},
            "shop"      : {"checkAttribute" : "value",   "wrongValue" : "",    "wrongRule" : "EmptyText"},
            "agreement" : {"checkAttribute" : "checked", "wrongValue" : false, "wrongRule" : "Disagree"}
        },
        // 這裏可以設定 alert 項目
        errorList = {
            "EmptyText"     : "您有資料沒有輸入到，請再次輸入\n", 
            "Disagree"      : "請同意資料為行銷活動使用\n", 
            "BirthdayWrong" : "生日格式不正確\n", 
            "PhoneWrong"    : "電話格式不正確\n", 
            "EmailWrong"    : "email 格式不正確\n", 
        };

    filteValue(initializer.config);

    $("#submitImage").on("click", function(e){
        // 判斷每個顯示欄位的輸入的值是否合乎規定
        for (var i = 0 ; i < columnListLength ; i++){
            if(initializer.config.isShowColumn[columnList[i]] === true && !isLegalInput(document.querySelector("#msg>#formPost>[name=" + columnList[i] + "]"))){
                setExistWrongRule();
            }
        }

        var errorMessage = getErrorMessage();
        if (errorMessage !== ""){
            resetExistWrongRule();
            alert(errorMessage);
            return;
        }

        document.querySelector("#formPost").submit();
    });

    var wrongRule = "";
    function isLegalInput(obj){
        var checkColumn    = columnRule[obj.name],
            checkAttribute = columnRule[obj.name].checkAttribute,
            wrongValue     = columnRule[obj.name].wrongValue;
        
        // 載入驗證規則
        if (obj[checkAttribute] === wrongValue){
            wrongRule = checkColumn["wrongRule"];
            return false;
        }

        /* 特別要新增的驗證規則 */
        if (obj.name === "birthday" && !isLegalBirthday(obj.value)){
            wrongRule = "BirthdayWrong";
            return false;
        }

        if (obj.name === "phone" && !isLegalPhone(obj.value)){
            wrongRule = "PhoneWrong";
            return false;
        }

        if (obj.name === "email" && !isLegalEmail(obj.value)){
            wrongRule = "EmailWrong";
            return false;
        }

        return true;
    }

    function resetExistWrongRule(){
        existWrongRule = [];
    }

    function filteValue(config){
        var errorMessage = "";
        if (document.getElementById("submitImage") === null){
            errorMessage += "請設定表單提交圖片的 id=\"submitImage\"" + "\n";
        }

        // 沒有 isShowColumn 這個 Object 或這個 Object 為空值
        if (jQuery.isEmptyObject(config.isShowColumn)){
            errorMessage += "請設定選單中出現的項目" + "\n";
        }

        // 如果沒有設定對應的表單名稱則預設為 false
        for(var i = 0 ; i < columnListLength ; i++){
            if (config.isShowColumn[columnList[i]] === undefined){
                config.isShowColumn[columnList[i]] = false;
            }
        }

        // 如果設櫃點是出現的，但是沒填櫃點內容
        if (config.isShowColumn["shop"] === true && jQuery.isEmptyObject(config.stores)){
            errorMessage += "設定選單中出現櫃點，但是沒有填入櫃點資料" + "\n";
        }

        if (errorMessage !== ""){
            console.log(errorMessage);
        }
    }

    function getErrorMessage(){
        var errorMessage = "";

        for (var  i = 0 ; i < existWrongRule.length ; i ++){
            errorMessage += errorList[existWrongRule[i]];
        }
        return errorMessage;
    }

    var existWrongRule = [];
    function setExistWrongRule(){
        if (jQuery.inArray(wrongRule, existWrongRule) === -1 && wrongRule !== ""){
            existWrongRule.push(wrongRule);
        }

        wrongRule = "";
        // console.log(existWrongRule);
    }




    function isLegalBirthday(inputBirthday){
        var birthdayRule = /^(20|19)[0-9]{2}\-(0[1-9]|1[012])\-(0[1-9]|[1-2][0-9]|3[0-2])$/;
        return inputBirthday.search(birthdayRule) === -1 
              ? false 
              : true;
    }

    function isLegalPhone(inputPhone){
        var phoneRule = /^09[0-9]{8}$/;
        return inputPhone.search(phoneRule) === -1 
              ? false
              : true;
    }

    function isLegalEmail(inputEmail){
        var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        return inputEmail.search(emailRule) === -1 
              ? false
              : true;
    }

    function loadShops(){
        var lengthShop = initializer.config.stores[area.selectedIndex]["shops"].length;

        for (var i = 0 ; i < lengthShop ; i ++){
            loadOption(initializer.config.stores[area.selectedIndex]["shops"][i], shops);
        }
    }

    function loadOption(text, selectTarget, value){
        var option = document.createElement("OPTION");

        var text_node = document.createTextNode(text);

        option.value = value === undefined
                     ? text
                     : value;

        option.appendChild(text_node);

        selectTarget.appendChild(option);
    }

    function clearShops(){
        var length = shops.length;

        for (var i = 0 ; i < length ; i ++){
            shops.remove(0);
        }
    }

    // 初始化內容包含 birthday
    if (initializer.config.isShowColumn["birthday"] === true){
        $("[name=birthday]").datepicker({
            dateFormat: "yy-mm-dd",
            changeMonth: true,
            changeYear: true,
            defaultDate: (new Date(new Date().getFullYear() - 18 + "/01/01") - new Date()) / (1000 * 60 * 60 * 24),
            yearRange: "-105:+18",
            maxDate: '+0'
        });

        $("[name=birthday]").keydown(function(e) {
            // e.preventDefault();
            return false;
        });
    }

    // 初始化內容包含 shop
    if (initializer.config.isShowColumn["shop"] === true){
        // for IE8
        if (initializer.config.stores[initializer.config.stores.length - 1] === undefined){
            initializer.config.stores.pop();
        }

        var area        = document.querySelector("[name=area]"),
            shops       = document.querySelector("[name=shop]"),
            isChanged   = false;

        (function appendArea(){
            var areaLength = initializer.config.stores.length;

            for (var i = 0 ; i < areaLength ; i ++){
                loadOption(initializer.config.stores[i]["area"], area);
            }
        })();

        $("[name=area]").on("change", function(){
            if (isChanged === false){
                    shops.removeAttribute("disabled");
                    area.remove(0);
                    isChanged = true;
            }
            
            clearShops();

            loadShops();
        });
    }
});

