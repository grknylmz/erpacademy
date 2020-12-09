sap.ui.define(
  ["com/kpmg/erpacademy/controller/BaseController"],
  function (Controller) {
    "use strict";

    return Controller.extend("com.kpmg.erpacademy.controller.Overview", {
      onPress: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("detail");
      },
    });
  }
);
