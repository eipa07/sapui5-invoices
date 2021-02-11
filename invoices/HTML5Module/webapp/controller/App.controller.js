// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "com/ui5/invoices/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
         * 
         * @param {typeof sap.ui.core.mvc.Controller}           Controller
         * @param {typeof sap.m..MessageToast}                  MessageToast
         * @param {typeof sap.ui.model.json.Models}             Models
         * @param {typeof sap.ui.model.resource.ResourceModel}  ResourceModel
         * 
         * 
         */

    (Controller, MessageToast, Models, ResourceModel) => {
        "use strict";

        return Controller.extend("com.ui5.invoices.controller.App", {

            onInit: () => {

            },

            onShowHello: function () {

                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("Mensage", [sRecipient]);

                MessageToast.show(sMsg);
            }

        });

    });