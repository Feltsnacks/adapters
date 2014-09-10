/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */






/*******************************************************************************
 * Functions that correspond to JSONStore client operations
 * 
 */

function LogIn(){
	return {}; 
}

function getProjects(LastSync, IsInitial) {		
	WL.Logger.debug('SQLAdapter-impl.js.getProjects: ' + LastSync);
	
	return WL.Server.invokeSQLStoredProcedure({
	procedure : 'WL_GetProjects',
	//procedure : 'Anders_GetProjects',
	parameters : [LastSync, IsInitial]
	});
}

function getUsers(LastSync, IsInitial) {
	WL.Logger.debug('SQLAdapter-impl.js.getUsers: ' + LastSync);
	
	return WL.Server.invokeSQLStoredProcedure({
	procedure : 'WL_GetUsers',
	parameters : [LastSync, IsInitial]
	});

}

function getProjectUsers(LastSync, IsInitial){
	WL.Logger.debug('SQLAdapter-impl.js.getProjectUsers: ' + LastSync);
	
	return WL.Server.invokeSQLStoredProcedure({
	procedure : 'WL_GetProjectUsers',
	parameters : [LastSync, IsInitial]
	});
}


//var selectGetTools =  WL.Server.createSQLStatement('Select * from Tool');

function getTools(lastSync, isInitial, currentStorage){
	WL.Logger.debug('sqlAdapter - getTools: ' + lastSync + ', ' + isInitial);
		
	return WL.Server.invokeSQLStoredProcedure({
		procedure : 'WL_GetTools',
        //procedure : 'Anders_GetTools',
		parameters : [lastSync, isInitial, currentStorage]
			
	});
	
	/*return WL.Server.invokeSQLStatement({
		preparedStatement : selectGetTools,
		parameters : []
	});*/
} 

function getStatuses(lastSync, isInitial){
	WL.Logger.debug('sqlAdapter - getStatuses: ' + lastSync + ', ' + isInitial);
	
	return WL.Server.invokeSQLStoredProcedure({
		procedure : 'WL_GetStatus',
		parameters : [lastSync, isInitial]
			
	});
	
}

var selectStockStatus = WL.Server.createSQLStatement("select * from StockStatus where 1=2");
function getStockStatus(lastSync, isInitial){
	return WL.Server.invokeSQLStatement({
		preparedStatement : selectStockStatus,
		parameters : []
	});
}

function addStockStatus(param1){
	//WL.Logger.error('addStockStatus');	
	WL.Logger.warn('addStockStatus: ' +param1);
		
	var data = JSON.parse(param1);
	var Updated = new Date(data.Updated) || new Date() || null;
	var StatusID = data.StatusID || null;
	var UserID = data.UserID || null;
	var Quantity = data.Quantity || 0;
	var QuantityCounted = data.QuantityCounted || null;
	var ToolID = data.ToolID || null;
	var StorageID = data.StorageID || null;
	var RINumber = data.RINumber || null;
	var LOTNumber = data.LOTNumber || null;
	var Login = data.Login || "anom";
	var DeviationID = data.DeviationID || null;
	var DeviationImage = data.DeviationImage || null;
    var StorageIDFrom = data.StorageIDFrom || null;
    var PurchaseOrderItemID = data.PurchaseOrderItemID || null;
    var RequisitionItemID = data.RequisitionItemID || null;
    var PurchaseOrderItemSubID = data.PurchaseOrderItemSubID || null;
    var DevivationComment = data.DeviationComment || null;

    return WL.Server.invokeSQLStoredProcedure({
		procedure : 'WL_SetStockStatus',
		parameters : [Updated, StatusID, UserID, Quantity, QuantityCounted, ToolID, StorageID, RINumber, LOTNumber, Login, StorageIDFrom, PurchaseOrderItemID, RequisitionItemID, PurchaseOrderItemSubID, DeviationID, DeviationImage, DevivationComment]
			
	});
} 

function replaceStockStatus(param1){
	
}
function deleteStockStatus(param1){
	
}

function getVibrations(lastSync, isInitial){
	WL.Logger.debug('sqlAdapter - getVibrations: ' + lastSync + ', ' + isInitial);
	
	return WL.Server.invokeSQLStoredProcedure({
		procedure : 'WL_GetVibrations',
		parameters : [lastSync, isInitial]
			
	});
	
}

function getStorages(lastSync, isInitial, topLocationID){
	WL.Logger.debug('sqlAdapter - getStorages: ' + lastSync + ', ' + isInitial + ', ' + topLocationID);
	
	return WL.Server.invokeSQLStoredProcedure({
		procedure : 'WL_GetStorages',
		parameters : [lastSync, isInitial, topLocationID]
			
	});
	
}

function addRequisitionItem(param){
	WL.Logger.warn('addRequisitionItem: ' + param);
	
	var data = JSON.parse(param);
		
	var LoginName = data.LoginName || 'anom';
	var ProjectID = data.ProjectID || null;
	var StorageID = data.StorageID || null;
	var ToolID = data.ToolID || null;
	var Quantity = data.Quantity || null;
	var Created = new Date(data.Created);// || new Date() || null;
	
	
	
	return WL.Server.invokeSQLStoredProcedure({
		procedure : 'WL_SetRequisitionItem',
		parameters : [LoginName, ProjectID, StorageID, ToolID, Quantity, Created]
			
	});
}

function getReceptions(lastSync, isInitial, currentStorageId){
	WL.Logger.debug('sqlAdapter - getReceptions: ' + lastSync + ', ' + isInitial);
	
	return WL.Server.invokeSQLStoredProcedure({
		procedure : 'WL_getReceptions',
		parameters : [lastSync, isInitial, currentStorageId]
			
	});
	
}

function getLocations(lastSync){
	WL.Logger.debug('sqlAdapter - getLocations: ' + lastSync);
	
	return WL.Server.invokeSQLStoredProcedure({
		procedure : 'WL_GetLocations',
		parameters : [lastSync]
			
	});
	
}

function getPicks(lastSync, isInitial, currentStorageId){
	WL.Logger.debug('sqlAdapter - getPicks: ' + lastSync + ', ' + isInitial);
	
	return WL.Server.invokeSQLStoredProcedure({
		procedure : 'WL_getPicks',
		parameters : [lastSync, isInitial, currentStorageId]
			
	});
	
}

function getPickHeaders(lastSync, isInitial, currentStorageId){
	WL.Logger.debug('sqlAdapter - getPickHeaders');
	
	return WL.Server.invokeSQLStoredProcedure({
		procedure : 'WL_GetPickHeaders',
		parameters : [lastSync, isInitial, currentStorageId]
	});
}

function getReceptionHeaders(lastSync, isInitial, currentStorageId){
	WL.Logger.debug('sqlAdapter - getReceptionHeaders');
	
	return WL.Server.invokeSQLStoredProcedure({
		procedure : 'WL_GetReceptionHeaders',
		parameters : [lastSync, isInitial, currentStorageId]
	});
}

function setReceptionHeader(param){
	WL.Logger.warn('setReceptionHeader: ' + param);
	
	var data = JSON.parse(param);
		
	var PurchaseOrderID = data.PurchaseOrderID || null;
	var Status = data.Status;
	
	
	return WL.Server.invokeSQLStoredProcedure({
		procedure : 'WL_SetReceptionHeader',
		parameters : [PurchaseOrderID, Status]
			
	});
}

function getReceptionItems(lastSync, isInitial, currentStorageId){
	WL.Logger.debug('sqlAdapter - getReceptionItems');
	
	return WL.Server.invokeSQLStoredProcedure({
		procedure : 'WL_GetReceptionItems',
		parameters : [lastSync, isInitial, currentStorageId]
	});
}

function setReceptionItem(param){
	
	WL.Logger.warn('setReceptionItem: ' + param);
	
	var data = JSON.parse(param);
		
	var PurchaseOrderItemID = parseInt(data.PurchaseOrderItemID) || null;
	var QuantityDelivery = parseInt(data.QuantityDelivery) || null;
	var DeliveryDateActual = new Date(data.DeliveryDateActual) || new Date() || null;
    var POIStatus = parseInt(data.DeliveryStatusID) || null; 

    return WL.Server.invokeSQLStoredProcedure({
        procedure : 'WL_SetReceptionItem',
        parameters : [PurchaseOrderItemID, QuantityDelivery, DeliveryDateActual, null, POIStatus]
    });
	
}

function getDeviations(lastSync, isInitial){
	
	WL.Logger.debug('sqlAdapter - getDeviations');
	
	return WL.Server.invokeSQLStoredProcedure({
		procedure : 'WL_GetDeviations',
		parameters : [lastSync, isInitial]
	});
}

function setStorage(param) {
    WL.Logger.warn('setStorage: ' + param);

    var data = JSON.parse(param);

    var storageID = data.StorageID  || null;
    var storageParentID = data.StorageParentID || null;

    if(data.Transportation){
        setTransportation(data.Transportation);
    }

    return WL.Server.invokeSQLStoredProcedure({
        procedure : 'WL_SetStorage',
        parameters : [storageID, storageParentID]

    });
}

function setTransportation(param) {
    WL.Logger.warn('setTransportation: ' + param);

    var UserID = param.UserID || null;
    var PickedUpByTransporter = param.PickedUpByTransporter || null;
    var URL = param.URL || null;
    var FreightNo = param.FreightNo || null;
    var Created = new Date(param.Created) || new Date();
    var StorageID = param.StorageID || null;
    var StorageID_DOM_from = param.StorageID_DOM_from || null;
    var StorageID_DOM_to = param.StorageID_DOM_to || null;



    /*return WL.Server.invokeSQLStoredProcedure({
        procedure : 'WL_SetTranportation',
        parameters : [storageID, storageParentID]

    });*/
}

function getTransportations(lastSync, isInitial){

    WL.Logger.debug('sqlAdapter - getTransportations');

    return WL.Server.invokeSQLStoredProcedure({
        procedure : 'WL_getTransportations',
        parameters : [lastSync, isInitial]
    });
}

function updateTransportation(param) {
    WL.Logger.warn('setTransportation: ' + param);

    var data = JSON.parse(param);
    
    
    
    var TransportationID = data.TransportationID || null;
    var UserID = data.UserID || null;
    var PickedUpByTransporter = new Date(data.PickedUpByTransporter) || null;
    var URL = data.URL || null;
    var FreightNo = data.FreightNo || null;
    var Created = new Date(data.Created) || new Date();
    var StorageID = data.StorageID || null;
    var StorageID_DOM_from = data.StorageID_DOM_from || null;
    var StorageID_DOM_to = data.StorageID_DOM_to || null;
    var PurchaseOrderID = data.PurchaseOrderID || null;



    return WL.Server.invokeSQLStoredProcedure({
     procedure : 'WL_updateTransportation',
     parameters : [TransportationID, UserID, PickedUpByTransporter, URL, FreightNo, Created, StorageID, StorageID_DOM_from, StorageID_DOM_to, PurchaseOrderID]

     });
}

function addTransportation(param) {
    WL.Logger.warn('setTransportation: ' + param);

    var data = JSON.parse(param);
   
    
    var UserID = data.UserID || null;

    if(data.PickedUpByTransporter) {
        var PickedUpByTransporter = new Date(data.PickedUpByTransporter) || null;
    }else{
        var PickedUpByTransporter = null;
    }

    var URL = data.URL || null;
    var FreightNo = data.FreightNo || null;
    var Created = new Date(data.Created) || new Date();
    var StorageID = data.StorageID || null;
    var StorageID_DOM_from = data.StorageID_DOM_from || null;
    var StorageID_DOM_to = data.StorageID_DOM_to || null;
    var PurchaseOrderID = data.PurchaseOrderID || null;


    return WL.Server.invokeSQLStoredProcedure({
        procedure : 'WL_addTransportation',
        parameters : [UserID, PickedUpByTransporter, URL, FreightNo, Created, StorageID, StorageID_DOM_from, StorageID_DOM_to, PurchaseOrderID]

    });
}

function pingAdapter(){
    return {};
}

function DummyReplaceAdapter(param){
    WL.Logger.error('There are no replace adapter this object. The replacement will be ignored! The object are: ' + param);
    return {};
}

function DummyAddAdapter(param){
    WL.Logger.error('There are no add adapter this object. The add will be ignored! The object are: ' + param);
    return {};
}

function DummyRemoveAdapter(param){
    WL.Logger.error('There are no remove adapter this object. The removing will be ignored! The object are: ' + param);
    return {};
}

function setPickHeader(param){
    WL.Logger.warn('setPickHeader: ' + param);

    var data = JSON.parse(param);

    WL.Logger.warn(data);

    var PurchaseOrderID = data.PurchaseOrderID || null;
    var Status = data.Status;


    return WL.Server.invokeSQLStoredProcedure({
        procedure : 'WL_SetReceptionHeader',
        parameters : [PurchaseOrderID, Status]

    });
}

function setPick(param){

    WL.Logger.warn('setPick: ' + param);

    var data = JSON.parse(param);

    var PurchaseOrderItemID = parseInt(data.PurchaseOrderItemID) || null;
    var QuantityDelivery = parseInt(data.QuantityDelivery) || null;
    var DeliveryDateActual = new Date(data.DeliveryDateActual) || new Date() || null;
    var POStatusID = parseInt(data.POStatusID) || null; 
    var POIStatus = parseInt(data.Status) || null; 

    return WL.Server.invokeSQLStoredProcedure({
        procedure : 'WL_SetReceptionItem',
        parameters : [PurchaseOrderItemID, QuantityDelivery, DeliveryDateActual, POStatusID, POIStatus]
    });
}

/*function DeviationTestAnders(param1){
	//WL.Logger.error('addStockStatus');	
	WL.Logger.warn('DeviationTestAnders: ' +param1);
		
	
	//var image = null;
	var image = '/9j/4AAQSkZJRgABAgEASABIAAD/4RxFRXhpZgAASUkqAAgAAAALAA4BAgALAAAAkgAAAA8BAgAGAAAAsgAAABABAgAFAAAAygAAABIBAwABAAAAAQAAABoBBQABAAAA2AAAABsBBQABAAAA4AAAACgBAwABAAAAAgAAADEBAgAJAAAA6AAAADIBAgAUAAAACAEAABMCAwABAAAAAgAAAGmHBAABAAAAHAEAABgDAAAgICAgICAgICAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE5JS09OAAAAAAAAAAAAAAAAAAAAAAAAAEU5NTAAAAAAAAAAAAAALAEAAAEAAAAsAQAAAQAAAHY5ODFwLTc5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDAwMDowMDowMCAwMDowMDowMAAYAJqCBQABAAAAQgIAAJ2CBQABAAAASgIAACKIAwABAAAAAgAAACeIAwABAAAAZAAAAACQBwAEAAAAMDIxMAOQAgAUAAAAUgIAAASQAgAUAAAAZgIAAAGRBwAEAAAAAQIDAAKRBQABAAAAegIAAASSCgABAAAAggIAAAWSBQABAAAAigIAAAeSAwABAAAAAwAAAAiSAwABAAAAAAAAAAmSAwABAAAAAAAAAAqSBQABAAAAkgIAAHySBwA0AQAAlAMAAIaSBwB9AAAAmgIAAACgBwAEAAAAMDEwMAGgAwABAAAAAQAAAAKgBAABAAAAQAYAAAOgBAABAAAAsAQAAAWgBAABAAAAdgMAAACjBwABAAAAAwAAAAGjBwABAAAAAQAAAAAAAAAKAAAAggAAABsAAAAKAAAAMDAwMDowMDowMCAwMDowMDowMAAwMDAwOjAwOjAwIDAwOjAwOjAwAAIAAAABAAAAAAAAAAoAAAAaAAAACgAAAEwAAAAKAAAAAAAAAAAAAAAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAABgADAQMAAQAAAAYAAAAaAQUAAQAAAGYDAAAbAQUAAQAAAG4DAAAoAQMAAQAAAAIAAAABAgQAAQAAAPQHAAACAgQAAQAAADQPAAAAAAAALAEAAAEAAAAsAQAAAQAAAAIAAQACAAQAAABSOTgAAgAHAAQAAAAwMTAwAAAAAE5pa29uAAEACwACAAIABgAAACYEAAADAAMAAQAAAAsAAAAEAAMAAQAAAAEAAAAFAAMAAQAAAAAAAAAGAAMAAQAAAAYAAAAHAAMAAQAAAAAAAAAIAAUAAQAAACwEAAAJAAIAFAAAADQEAAAKAAUAAQAAAEgEAAALAAMAAQAAAAAAAAAADwQAHgAAAFAEAAAAAAAAMDguMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkAAAAAUkAgAFPAAAAAP8BAAEAAGGoNwAAAAABHmIAAAbjAAEYAQAADmYAAA5mAAAbAws8AAAAAAAABgYGbAaCBkKsAAr0AC0ABB4nAQAAAAAPAAAAAAAAQAA8GwAAQAAOZkwPCH8CUWQABw0EDA0xaQH/AEBrMgrQ5wAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2P/bAMUADAkJCwkIDAsKCw4NDA8THxQTERETJhsdFx8tKDAvLCgsKzI4SD0yNUQ2Kyw+VT9ESkxQUVAwPFheV05eSE9QTQENDg4TEBMlFBQlTTMsM01NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NAg0ODhMQEyUUFCVNMywzTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU3/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/wAARCAB4AKADASEA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qlW61ahVq1+qVap9qlWq1epXqleqVarV7nWqVe5V6leqdap3qle6UapXulW6V6rR6lWuVapVolWqV+v/7RLWUGhvdG9zaG9wIDMuMAA4QklNA+0KUmVzb2x1dGlvbgAAAAAQAEgAAAABAAIASAAAAAEAAjhCSU0EDRhGWCBHbG9iYWwgTGlnaHRpbmcgQW5nbGUAAAAABAAAAB44QklNBBkSRlggR2xvYmFsIEFsdGl0dWRlAAAAAAQAAAAeOEJJTQPzC1ByaW50IEZsYWdzAAAACQAAAAAAAAAAAQA4QklNBAoOQ29weXJpZ2h0IEZsYWcAAAAAAQAAOEJJTScQFEphcGFuZXNlIFByaW50IEZsYWdzAAAAAAoAAQAAAAAAAAACOEJJTQP1F0NvbG9yIEhhbGZ0b25lIFNldHRpbmdzAAAASAAvZmYAAQBsZmYABgAAAAAAAQAvZmYAAQChmZoABgAAAAAAAQAyAAAAAQBaAAAABgAAAAAAAQA1AAAAAQAtAAAABgAAAAAAAThCSU0D+BdDb2xvciBUcmFuc2ZlciBTZXR0aW5ncwAAAHAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAOEJJTQQIBkd1aWRlcwAAAAAQAAAAAQAAAkAAAAJAAAAAADhCSU0EHg1VUkwgb3ZlcnJpZGVzAAAABAAAAAA4QklNBBoGU2xpY2VzAAAAAHEAAAAGAAAAAAAAAAAAAAHCAAABbwAAAAgARABTAEMATgAwADAAMQA4AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAFvAAABwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4QklNBBERSUNDIFVudGFnZ2VkIEZsYWcAAAABAQA4QklNBBQXTGF5ZXIgSUQgR2VuZXJhdG9yIEJhc2UAAAAEAAAAAThCSU0EDBVOZXcgV2luZG93cyBUaHVtYm5haWwAAA8xAAAAAQAAAFsAAABwAAABFAAAeMAAAA8VABgAAf/Y/+AAEEpGSUYAAQIBAEgASAAA/+4ADkFkb2JlAGSAAAAA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';
	
	return WL.Server.invokeSQLStoredProcedure({
		procedure : 'WL_DeviationTestAnders',
		parameters : [1, image, new Date(), new Date(), new Date(), 5136]
			
	});
}*/



//function getPickHeaders(lastSync, isInitial, currentStorageId){
//	return{ 
//		"isSuccessful": true,
//		"resultSet": 
//			[
//	                 {
//	                    "Comment": null,
//	                    "Name": "Hovedlager",
//	                    "PODeliveryDateEstimated": null,
//	                    "ProjectID": 5,
//	                    "ProjectName": "Sove",
//	                    "ProjectNr": "3243",
//	                    "PurchaseOrderID": 45,
//	                    "PurchaseOrderNo": "45",
//	                    "Status": 0,
//	                    "StorageID": 1,
//	                    "Updated": "2014-04-08T14:06:15.759Z"
//	                 },
//	                 {
//	                    "Comment": null,
//	                    "Name": "Hovedlager",
//	                    "PODeliveryDateEstimated": null,
//	                    "ProjectID": null,
//	                    "ProjectName": null,
//	                    "ProjectNr": null,
//	                    "PurchaseOrderID": 54,
//	                    "PurchaseOrderNo": null,
//	                    "Status": 0,
//	                    "StorageID": 1,
//	                    "Updated": "2014-04-09T10:37:06.064Z"
//	                 },
//	                 {
//	                    "Comment": null,
//	                    "Name": "Hovedlager",
//	                    "PODeliveryDateEstimated": null,
//	                    "ProjectID": 5,
//	                    "ProjectName": "Sove",
//	                    "ProjectNr": "3243",
//	                    "PurchaseOrderID": 60,
//	                    "PurchaseOrderNo": null,
//	                    "Status": 0,
//	                    "StorageID": 1,
//	                    "Updated": "2014-04-22T09:12:41.327Z"
//	                 },
//	                 {
//	                    "Comment": null,
//	                    "Name": null,
//	                    "PODeliveryDateEstimated": null,
//	                    "ProjectID": null,
//	                    "ProjectName": null,
//	                    "ProjectNr": null,
//	                    "PurchaseOrderID": 0,
//	                    "PurchaseOrderNo": null,
//	                    "Status": null,
//	                    "StorageID": null,
//	                    "Updated": "2014-04-23T13:30:12.949Z"
//	                 },
//	                 {
//	                    "Comment": "fee",
//	                    "Name": "Hovedlager",
//	                    "PODeliveryDateEstimated": null,
//	                    "ProjectID": 5,
//	                    "ProjectName": "Sove",
//	                    "ProjectNr": "3243",
//	                    "PurchaseOrderID": 65,
//	                    "PurchaseOrderNo": "65",
//	                    "Status": 0,
//	                    "StorageID": 1,
//	                    "Updated": "2014-04-23T13:30:12.949Z"
//	                 }
//	              ]
//	};
//}

//function getReceptions(lastSync, isInitial, currentStorageId){
//	WL.Logger.debug('sqlAdapter - getReceptions: ' + lastSync + ', ' + isInitial);
//	
//	return {
//	   "isSuccessful": true,
//	   "resultSet": [
//	      {
//	         "Created": "2014-02-05T09:57:40.060Z",
//	         "Deleted": null,
//	         "ReceptionID": 4,
//	         "ProjectName": "Programmering",
//	         "ProjectNr": "33456",
//	         "Updated": "2014-02-05T09:56:01.793Z"
//	      },
//	      {
//	         "Created": "2014-02-05T09:57:20.393Z",
//	         "Deleted": null,
//	         "ReceptionID": 3,
//	         "ProjectName": "B�tpuss",
//	         "ProjectNr": "123456",
//	         "Updated": "2014-02-05T09:56:01.793Z"
//	      },
//	      {
//	         "Created": "2014-02-05T09:56:25.580Z",
//	         "Deleted": null,
//	         "ReceptionID": 2,
//	         "ProjectName": "Platformbygging",
//	         "ProjectNr": "223344",
//	         "Updated": "2014-02-05T09:56:01.793Z"
//	      },
//	      {
//	         "Created": "2014-04-02T09:56:01.793Z",
//	         "Deleted": null,
//	         "ReceptionID": 0,
//	         "ProjectName": "Verkt�y system",
//	         "ProjectNr": "112233",
//	         "Updated": "2014-02-05T09:56:01.793Z"
//	      }
//	      ]
//	};
//	
//}

//function getProjects(){
//	return {
//		   "isSuccessful": true,
//		   "resultSet": [
//		      {
//		         "Created": "2014-02-05T09:57:40.060Z",
//		         "Deleted": null,
//		         "ProjectID": 4,
//		         "ProjectName": "Programmering",
//		         "ProjectNr": "33456",
//		         "Updated": "2014-02-05T09:56:01.793Z"
//		      },
//		      {
//		         "Created": "2014-02-05T09:57:20.393Z",
//		         "Deleted": null,
//		         "ProjectID": 3,
//		         "ProjectName": "B�tpuss",
//		         "ProjectNr": "123456",
//		         "Updated": "2014-02-05T09:56:01.793Z"
//		      },
//		      {
//		         "Created": "2014-02-05T09:56:25.580Z",
//		         "Deleted": null,
//		         "ProjectID": 2,
//		         "ProjectName": "Platformbygging",
//		         "ProjectNr": "223344",
//		         "Updated": "2014-02-05T09:56:01.793Z"
//		      },
//		      {
//		         "Created": "2014-02-05T09:56:01.793Z",
//		         "Deleted": null,
//		         "ProjectID": 1,
//		         "ProjectName": "Verkt�y system",
//		         "ProjectNr": "112233",
//		         "Updated": "2014-02-05T09:56:01.793Z"
//		      },
//		      {
//			         "Created": "2014-02-05T09:56:01.793Z",
//			         "Deleted": null,
//			         "ProjectID": 5,
//			         "ProjectName": "Oppfeitingsprosjektet",
//			         "ProjectNr": "88888",
//			         "Updated": "2014-02-05T09:56:01.793Z"
//			      },
//		      {
//		         "Created": null,
//		         "Deleted": null,
//		         "ProjectID": 0,
//		         "ProjectName": "OffsetRow",
//		         "ProjectNr": null,
//		         "Updated": "2014-02-05T09:56:01.793Z"
//		      }
//		   ]
//		};
//	}
//
//function getUsers(){
//	return {
//		   "isSuccessful": true,
//		   "resultSet": [
//		      {
//		         "Created": "2014-02-05T10:03:36.310Z",
//		         "Deleted": null,
//		         "FirstName": "���",
//		         "LastName": "���",
//		         "Sign": "55",
//		         "Updated": "2014-02-05T09:58:40.890Z",
//		         "UserID": 8
//		      },
//		      {
//		         "Created": "2014-02-05T10:03:13.980Z",
//		         "Deleted": null,
//		         "FirstName": "S",
//		         "LastName": "Vindel",
//		         "Sign": "44",
//		         "Updated": "2014-02-05T09:58:40.890Z",
//		         "UserID": 6
//		      },
//		      {
//		         "Created": "2014-02-05T10:02:46.137Z",
//		         "Deleted": null,
//		         "FirstName": "5555",
//		         "LastName": "4444",
//		         "Sign": "33",
//		         "Updated": "2014-02-05T09:58:40.890Z",
//		         "UserID": 5
//		      },
//		      {
//		         "Created": "2014-02-05T10:00:02.847Z",
//		         "Deleted": null,
//		         "FirstName": "Pompel",
//		         "LastName": "Pilt",
//		         "Sign": "22",
//		         "Updated": "2014-02-05T09:58:40.890Z",
//		         "UserID": 4
//		      },
//		      {
//		         "Created": "2014-02-05T09:59:36.090Z",
//		         "Deleted": null,
//		         "FirstName": "Anders",
//		         "LastName": "Hellerud",
//		         "Sign": "13",
//		         "Updated": "2014-02-05T09:58:40.890Z",
//		         "UserID": 3
//		      },
//		      {
//		         "Created": "2014-02-05T09:59:12.673Z",
//		         "Deleted": null,
//		         "FirstName": "Magnus",
//		         "LastName": "Nordby",
//		         "Sign": "12",
//		         "Updated": "2014-02-05T09:58:40.890Z",
//		         "UserID": 2
//		      },
//		      {
//		         "Created": "2014-02-05T09:58:40.890Z",
//		         "Deleted": null,
//		         "FirstName": "Are",
//		         "LastName": "Qvale",
//		         "Sign": "740933",
//		         "Updated": "2014-02-05T09:58:40.890Z",
//		         "UserID": 1
//		      },
//		      {
//		         "Created": null,
//		         "Deleted": null,
//		         "FirstName": null,
//		         "LastName": "OffsetRow",
//		         "Sign": null,
//		         "Updated": "2014-02-05T09:58:40.890Z",
//		         "UserID": 0
//		      }
//		   ]
//		};
//}
//
//function getProjectUsers(){
//	return {
//		   "isSuccessful": true,
//		   "resultSet": [
//		      {
//		         "Created": "2014-02-05T10:06:27.913Z",
//		         "Deleted": null,
//		         "ProjectID": 4,
//		         "ProjectUserID": 8,
//		         "Updated": "2014-02-05T09:56:01.793Z",
//		         "UserID": 2
//		      },
//		      {
//		         "Created": "2014-02-05T10:05:54.440Z",
//		         "Deleted": null,
//		         "ProjectID": 2,
//		         "ProjectUserID": 6,
//		         "Updated": "2014-02-05T09:56:01.793Z",
//		         "UserID": 3
//		      },
//		      {
//		         "Created": "2014-02-05T10:05:49.393Z",
//		         "Deleted": null,
//		         "ProjectID": 2,
//		         "ProjectUserID": 5,
//		         "Updated": "2014-02-05T09:56:01.793Z",
//		         "UserID": 2
//		      },
//		      {
//		         "Created": "2014-02-05T10:05:40.820Z",
//		         "Deleted": null,
//		         "ProjectID": 3,
//		         "ProjectUserID": 4,
//		         "Updated": "2014-02-05T09:56:01.793Z",
//		         "UserID": 1
//		      },
//		      {
//		         "Created": "2014-02-05T10:05:31.090Z",
//		         "Deleted": null,
//		         "ProjectID": 1,
//		         "ProjectUserID": 3,
//		         "Updated": "2014-02-05T09:56:01.793Z",
//		         "UserID": 3
//		      },
//		      {
//		         "Created": "2014-02-05T10:05:22.483Z",
//		         "Deleted": null,
//		         "ProjectID": 1,
//		         "ProjectUserID": 2,
//		         "Updated": "2014-02-05T09:56:01.793Z",
//		         "UserID": 2
//		      },
//		      {
//		         "Created": "2014-02-05T10:05:18.807Z",
//		         "Deleted": null,
//		         "ProjectID": 1,
//		         "ProjectUserID": 1,
//		         "Updated": "2014-02-05T09:56:01.793Z",
//		         "UserID": 1
//		      },
//		      {
//		         "Created": null,
//		         "Deleted": null,
//		         "ProjectID": null,
//		         "ProjectUserID": 0,
//		         "Updated": "2014-02-05T09:56:01.793Z",
//		         "UserID": null
//		      }
//		   ]
//		};
//}
//
//function getTools(){
//	return {
//		   "isSuccessful": true,
//		   "resultSet": [
//		      {
//		         "Barcode": "1231454321",
//		         "Code": null,
//		         "Created": "2014-02-19T10:47:40.757Z",
//		         "Deleted": null,
//		         "Description": "Skiftn�kkel \"Jumbo\"",
//		         "IsLOT": false,
//		         "Location": "L01H04R04",
//		         "Name": "Skiftn�kkel \"Jumbo\"",
//		         "Price": 322.0000,
//		         "Quantity": 1012.0000,
//		         "StatusID": 1,
//		         "Storage": "--",
//		         "StorageID": 11,
//		         "ToolID": 28,
//		         "Updated": null,
//		         "UserID": 1
//		      },
//		      {
//		         "Barcode": "24635465132",
//		         "Code": null,
//		         "Created": "2014-02-19T10:47:01.810Z",
//		         "Deleted": null,
//		         "Description": "Skiftn�kkel IDG-Tools Softgrip ",
//		         "IsLOT": false,
//		         "Location": "L01H04R03",
//		         "Name": "Skiftn�kkel IDG-Tools Softgrip",
//		         "Price": 75.0000,
//		         "Quantity": 3.0000,
//		         "StatusID": 1,
//		         "Storage": "--",
//		         "StorageID": 10,
//		         "ToolID": 27,
//		         "Updated": null,
//		         "UserID": 1
//		      },
//		      {
//		         "Barcode": "31235234",
//		         "Code": null,
//		         "Created": "2014-02-19T10:45:07.060Z",
//		         "Deleted": null,
//		         "Description": "Skiftn�kkel \"Heavy Duty\"",
//		         "IsLOT": false,
//		         "Location": "L01H04R03",
//		         "Name": "Skiftn�kkel \"Heavy Duty\"",
//		         "Price": 200.0000,
//		         "Quantity": 2.0000,
//		         "StatusID": 1,
//		         "Storage": "--",
//		         "StorageID": 10,
//		         "ToolID": 26,
//		         "Updated": null,
//		         "UserID": 1
//		      },
//		      {
//		         "Barcode": "77556545564",
//		         "Code": null,
//		         "Created": "2014-02-19T10:42:52.863Z",
//		         "Deleted": null,
//		         "Description": "Forlenger 1\/4\" m h�ndtak",
//		         "IsLOT": false,
//		         "Location": "L01H04R03",
//		         "Name": "Forlenger 1\/4\" m h�ndtak",
//		         "Price": 75.0000,
//		         "Quantity": 33.0000,
//		         "StatusID": 1,
//		         "Storage": "--",
//		         "StorageID": 10,
//		         "ToolID": 25,
//		         "Updated": null,
//		         "UserID": 1
//		      },
//		      {
//		         "Barcode": "76548654315",
//		         "Code": null,
//		         "Created": "2014-02-19T10:40:30.913Z",
//		         "Deleted": null,
//		         "Description": "Skralle 3\/8' spinner",
//		         "IsLOT": false,
//		         "Location": "L01H04R03",
//		         "Name": "Skralle 3\/8' spinner",
//		         "Price": 50.0000,
//		         "Quantity": 14.0000,
//		         "StatusID": 1,
//		         "Storage": "--",
//		         "StorageID": 10,
//		         "ToolID": 21,
//		         "Updated": null,
//		         "UserID": 1
//		      },
//		      {
//		         "Barcode": "75964564214",
//		         "Code": null,
//		         "Created": "2014-02-19T10:39:17.613Z",
//		         "Deleted": null,
//		         "Description": "Skralle 1\/4\"",
//		         "IsLOT": false,
//		         "Location": "L01H04R03",
//		         "Name": "Skralle 1\/4\"",
//		         "Price": 50.0000,
//		         "Quantity": 25.0000,
//		         "StatusID": 1,
//		         "Storage": "--",
//		         "StorageID": 10,
//		         "ToolID": 20,
//		         "Updated": null,
//		         "UserID": 1
//		      },
//		      {
//		         "Barcode": "1234",
//		         "Code": "RI-1237",
//		         "Created": "2014-02-19T10:24:56.930Z",
//		         "Deleted": null,
//		         "Description": "Makita BTD146Z 18v Li-ion Impact Driver (Body Only)",
//		         "IsLOT": false,
//		         "Location": "L01H03R03",
//		         "Name": "Makita BTD146Z",
//		         "Price": 8888.0000,
//		         "Quantity": 1.0000,
//		         "StatusID": 1,
//		         "Storage": "--",
//		         "StorageID": 9,
//		         "ToolID": 19,
//		         "Updated": null,
//		         "UserID": 1
//		      },
//		      {
//		         "Barcode": "123",
//		         "Code": "RI-1235",
//		         "Created": "2014-02-19T09:50:17.043Z",
//		         "Deleted": null,
//		         "Description": "Makita BHP458Z 18v Lithium-ion Cordless Hammer Drill\/Driver (Body Only)",
//		         "IsLOT": false,
//		         "Location": "L01H02R03",
//		         "Name": "Makita BHP458Z",
//		         "Price": 9999.0000,
//		         "Quantity": 1.0000,
//		         "StatusID": 1,
//		         "Storage": "--",
//		         "StorageID": 8,
//		         "ToolID": 14,
//		         "Updated": null,
//		         "UserID": 1
//		      },
//		      {
//		         "Barcode": "123",
//		         "Code": "RI-1234",
//		         "Created": "2014-02-19T09:49:52.573Z",
//		         "Deleted": null,
//		         "Description": "Makita BHP458Z 18v Lithium-ion Cordless Hammer Drill\/Driver (Body Only)",
//		         "IsLOT": false,
//		         "Location": "RI338-01",
//		         "Name": "Makita BHP458Z",
//		         "Price": 9999.0000,
//		         "Quantity": 1.0000,
//		         "StatusID": 1,
//		         "Storage": "Lager",
//		         "StorageID": 7,
//		         "ToolID": 13,
//		         "Updated": null,
//		         "UserID": 1
//		      },
//		      {
//		         "Barcode": null,
//		         "Code": "Test04",
//		         "Created": "2014-02-11T13:23:21.247Z",
//		         "Deleted": null,
//		         "Description": "As it Says",
//		         "IsLOT": false,
//		         "Location": "RI337-02",
//		         "Name": "Skiften�kkel 2\"",
//		         "Price": null,
//		         "Quantity": 2.0000,
//		         "StatusID": 2,
//		         "Storage": "Norcargohall",
//		         "StorageID": 5,
//		         "ToolID": 7,
//		         "Updated": null,
//		         "UserID": 9
//		      },
//		      {
//		         "Barcode": "123",
//		         "Code": "RI-1236",
//		         "Created": "2014-02-19T10:23:05.960Z",
//		         "Deleted": null,
//		         "Description": "Makita BHP458Z 18v Lithium-ion Cordless Hammer Drill\/Driver (Body Only)",
//		         "IsLOT": false,
//		         "Location": "L01H02R03",
//		         "Name": "Makita BHP458Z",
//		         "Price": 9999.0000,
//		         "Quantity": 1.0000,
//		         "StatusID": 3,
//		         "Storage": "--",
//		         "StorageID": 8,
//		         "ToolID": 17,
//		         "Updated": "2014-02-19T14:32:35.813Z",
//		         "UserID": 2
//		      },
//		      {
//		         "Barcode": null,
//		         "Code": null,
//		         "Created": null,
//		         "Deleted": null,
//		         "Description": null,
//		         "IsLOT": null,
//		         "Location": null,
//		         "Name": "OffsetRow",
//		         "Price": null,
//		         "Quantity": null,
//		         "StatusID": null,
//		         "Storage": null,
//		         "StorageID": null,
//		         "ToolID": 0,
//		         "Updated": "2014-02-19T14:32:35.813Z",
//		         "UserID": null
//		      }
//		   ]
//		};
//}
//
//function getVibrations(lastSync, isInitial){
//	return {
//   "isSuccessful": true,
//   "resultSet": [
//      {
//         "ColorCode": "Green     ",
//         "Created": "2014-02-07T12:36:51.977Z",
//         "Deleted": null,
//         "GDEMax": "16:00:00",
//         "Number": 3.0,
//         "TDEMax": "04:00:00",
//         "Updated": "2014-02-07T12:36:51.977Z",
//         "VibrationID": 4
//      },
//      {
//         "ColorCode": "Yellow    ",
//         "Created": "2014-02-07T12:38:12.617Z",
//         "Deleted": null,
//         "GDEMax": "09:53:00",
//         "Number": 4.5,
//         "TDEMax": "02:28:00",
//         "Updated": "2014-02-07T12:38:12.617Z",
//         "VibrationID": 5
//      },
//      {
//         "ColorCode": "Yellow    ",
//         "Created": "2014-02-07T12:39:04.403Z",
//         "Deleted": null,
//         "GDEMax": "08:00:00",
//         "Number": 5.0,
//         "TDEMax": "02:00:00",
//         "Updated": "2014-02-07T12:39:04.403Z",
//         "VibrationID": 6
//      },
//      {
//         "ColorCode": "Yellow    ",
//         "Created": "2014-02-07T12:40:18.263Z",
//         "Deleted": null,
//         "GDEMax": "12:30:00",
//         "Number": 4.0,
//         "TDEMax": "03:08:00",
//         "Updated": "2014-02-07T12:40:18.263Z",
//         "VibrationID": 7
//      },
//      {
//         "ColorCode": "Yellow    ",
//         "Created": "2014-02-07T12:42:21.523Z",
//         "Deleted": null,
//         "GDEMax": "06:37:00",
//         "Number": 5.5,
//         "TDEMax": "01:39:00",
//         "Updated": "2014-02-07T12:42:21.523Z",
//         "VibrationID": 8
//      },
//      {
//         "ColorCode": "Yellow    ",
//         "Created": "2014-02-10T08:53:41.913Z",
//         "Deleted": null,
//         "GDEMax": "05:33:00",
//         "Number": 6.0,
//         "TDEMax": "01:23:00",
//         "Updated": "2014-02-10T08:53:41.913Z",
//         "VibrationID": 9
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-10T09:09:43.760Z",
//         "Deleted": null,
//         "GDEMax": "04:33:00",
//         "Number": 6.5,
//         "TDEMax": "01:08:00",
//         "Updated": "2014-02-10T09:09:43.760Z",
//         "VibrationID": 10
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:43:57.807Z",
//         "Deleted": null,
//         "GDEMax": "04:05:00",
//         "Number": 7.0,
//         "TDEMax": "01:01:00",
//         "Updated": "2014-02-18T10:43:57.807Z",
//         "VibrationID": 11
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:44:56.360Z",
//         "Deleted": null,
//         "GDEMax": "03:33:00",
//         "Number": 7.5,
//         "TDEMax": "00:53:00",
//         "Updated": "2014-02-18T10:44:56.360Z",
//         "VibrationID": 12
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:45:18.647Z",
//         "Deleted": null,
//         "GDEMax": "03:08:00",
//         "Number": 8.0,
//         "TDEMax": "00:47:00",
//         "Updated": "2014-02-18T10:45:18.647Z",
//         "VibrationID": 13
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:45:55.840Z",
//         "Deleted": null,
//         "GDEMax": "02:46:00",
//         "Number": 8.5,
//         "TDEMax": "00:42:00",
//         "Updated": "2014-02-18T10:45:55.840Z",
//         "VibrationID": 14
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:46:18.523Z",
//         "Deleted": null,
//         "GDEMax": "02:28:00",
//         "Number": 9.0,
//         "TDEMax": "00:37:00",
//         "Updated": "2014-02-18T10:46:18.523Z",
//         "VibrationID": 15
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:46:45.490Z",
//         "Deleted": null,
//         "GDEMax": "02:08:00",
//         "Number": 9.5,
//         "TDEMax": "00:32:00",
//         "Updated": "2014-02-18T10:46:45.490Z",
//         "VibrationID": 16
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:47:08.153Z",
//         "Deleted": null,
//         "GDEMax": "02:00:00",
//         "Number": 10.0,
//         "TDEMax": "00:30:00",
//         "Updated": "2014-02-18T10:47:08.153Z",
//         "VibrationID": 17
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:47:28.780Z",
//         "Deleted": null,
//         "GDEMax": "01:39:00",
//         "Number": 11.0,
//         "TDEMax": "00:25:00",
//         "Updated": "2014-02-18T10:47:28.780Z",
//         "VibrationID": 18
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:47:45.497Z",
//         "Deleted": null,
//         "GDEMax": "01:23:00",
//         "Number": 12.0,
//         "TDEMax": "00:21:00",
//         "Updated": "2014-02-18T10:47:45.497Z",
//         "VibrationID": 19
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:48:15.073Z",
//         "Deleted": null,
//         "GDEMax": "01:11:00",
//         "Number": 13.0,
//         "TDEMax": "00:18:00",
//         "Updated": "2014-02-18T10:48:15.073Z",
//         "VibrationID": 20
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:48:33.673Z",
//         "Deleted": null,
//         "GDEMax": "01:01:00",
//         "Number": 14.0,
//         "TDEMax": "00:15:00",
//         "Updated": "2014-02-18T10:48:33.673Z",
//         "VibrationID": 21
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:48:52.260Z",
//         "Deleted": null,
//         "GDEMax": "00:53:00",
//         "Number": 15.0,
//         "TDEMax": "00:13:00",
//         "Updated": "2014-02-18T10:48:52.260Z",
//         "VibrationID": 22
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:49:09.773Z",
//         "Deleted": null,
//         "GDEMax": "00:47:00",
//         "Number": 16.0,
//         "TDEMax": "00:12:00",
//         "Updated": "2014-02-18T10:49:09.773Z",
//         "VibrationID": 23
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:49:33.627Z",
//         "Deleted": null,
//         "GDEMax": "00:42:00",
//         "Number": 17.0,
//         "TDEMax": "00:10:00",
//         "Updated": "2014-02-18T10:49:33.627Z",
//         "VibrationID": 24
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:49:49.303Z",
//         "Deleted": null,
//         "GDEMax": "00:37:00",
//         "Number": 18.0,
//         "TDEMax": "00:09:00",
//         "Updated": "2014-02-18T10:49:49.303Z",
//         "VibrationID": 25
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:50:38.913Z",
//         "Deleted": null,
//         "GDEMax": "00:33:00",
//         "Number": 19.0,
//         "TDEMax": "00:08:00",
//         "Updated": "2014-02-18T10:50:38.913Z",
//         "VibrationID": 26
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:50:54.630Z",
//         "Deleted": null,
//         "GDEMax": "00:30:00",
//         "Number": 20.0,
//         "TDEMax": "00:08:00",
//         "Updated": "2014-02-18T10:50:54.630Z",
//         "VibrationID": 27
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:51:11.063Z",
//         "Deleted": null,
//         "GDEMax": "00:27:00",
//         "Number": 21.0,
//         "TDEMax": "00:07:00",
//         "Updated": "2014-02-18T10:51:11.063Z",
//         "VibrationID": 28
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:51:31.810Z",
//         "Deleted": null,
//         "GDEMax": "00:25:00",
//         "Number": 22.0,
//         "TDEMax": "00:06:00",
//         "Updated": "2014-02-18T10:51:31.810Z",
//         "VibrationID": 29
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:51:34.333Z",
//         "Deleted": null,
//         "GDEMax": "00:23:00",
//         "Number": 23.0,
//         "TDEMax": "00:06:00",
//         "Updated": "2014-02-18T10:51:34.333Z",
//         "VibrationID": 30
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:51:36.030Z",
//         "Deleted": null,
//         "GDEMax": "00:22:00",
//         "Number": 24.0,
//         "TDEMax": "00:05:00",
//         "Updated": "2014-02-18T10:51:36.030Z",
//         "VibrationID": 31
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:51:38.170Z",
//         "Deleted": null,
//         "GDEMax": "00:19:00",
//         "Number": 25.0,
//         "TDEMax": "00:05:00",
//         "Updated": "2014-02-18T10:51:38.170Z",
//         "VibrationID": 32
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:51:40.497Z",
//         "Deleted": null,
//         "GDEMax": "00:18:00",
//         "Number": 26.0,
//         "TDEMax": "00:04:00",
//         "Updated": "2014-02-18T10:51:40.497Z",
//         "VibrationID": 33
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:51:41.787Z",
//         "Deleted": null,
//         "GDEMax": "00:16:00",
//         "Number": 27.0,
//         "TDEMax": "00:04:00",
//         "Updated": "2014-02-18T10:51:41.787Z",
//         "VibrationID": 34
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:51:45.217Z",
//         "Deleted": null,
//         "GDEMax": "01:15:00",
//         "Number": 28.0,
//         "TDEMax": "00:04:00",
//         "Updated": "2014-02-18T10:51:45.217Z",
//         "VibrationID": 35
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:51:48.183Z",
//         "Deleted": null,
//         "GDEMax": "00:15:00",
//         "Number": 29.0,
//         "TDEMax": "00:04:00",
//         "Updated": "2014-02-18T10:51:48.183Z",
//         "VibrationID": 36
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:51:49.530Z",
//         "Deleted": null,
//         "GDEMax": "00:13:00",
//         "Number": 30.0,
//         "TDEMax": "00:03:00",
//         "Updated": "2014-02-18T10:51:49.530Z",
//         "VibrationID": 37
//      },
//      {
//         "ColorCode": "Red       ",
//         "Created": "2014-02-18T10:51:55.290Z",
//         "Deleted": null,
//         "GDEMax": "00:12:00",
//         "Number": 31.0,
//         "TDEMax": "00:02:00",
//         "Updated": "2014-02-18T10:51:55.290Z",
//         "VibrationID": 38
//      },
//      {
//         "ColorCode": "OffsetRow",
//         "Created": null,
//         "Deleted": null,
//         "GDEMax": null,
//         "Number": null,
//         "TDEMax": null,
//         "Updated": "2014-02-18T10:51:55.290Z",
//         "VibrationID": 0
//      }
//   ]
//}; 
//}
//
//function getStatuses(lastSync, isInitial){
//	return {
//		   "isSuccessful": true,
//		   "resultSet": [
//		      {
//		         "Created": "2014-02-18T10:30:19.337Z",
//		         "Deleted": null,
//		         "StatusID": 9,
//		         "StatusNo": "8         ",
//		         "Type": "Kassert",
//		         "Updated": "2014-02-12T07:58:32.510Z"
//		      },
//		      {
//		         "Created": "2014-02-17T12:30:00.140Z",
//		         "Deleted": null,
//		         "StatusID": 8,
//		         "StatusNo": "7         ",
//		         "Type": "Plukk",
//		         "Updated": "2014-02-12T07:58:32.510Z"
//		      },
//		      {
//		         "Created": "2014-02-17T12:24:39.580Z",
//		         "Deleted": null,
//		         "StatusID": 6,
//		         "StatusNo": "6         ",
//		         "Type": "Rekvisisjon",
//		         "Updated": "2014-02-12T07:58:32.510Z"
//		      },
//		      {
//		         "Created": "2014-02-13T12:56:39.430Z",
//		         "Deleted": null,
//		         "StatusID": 5,
//		         "StatusNo": "5         ",
//		         "Type": "PO",
//		         "Updated": "2014-02-12T07:58:32.510Z"
//		      },
//		      {
//		         "Created": "2014-02-13T12:53:52.787Z",
//		         "Deleted": null,
//		         "StatusID": 4,
//		         "StatusNo": "4         ",
//		         "Type": "Telling",
//		         "Updated": "2014-02-12T07:58:32.510Z"
//		      },
//		      {
//		         "Created": "2014-02-12T07:58:32.510Z",
//		         "Deleted": null,
//		         "StatusID": 3,
//		         "StatusNo": "3         ",
//		         "Type": "Retur",
//		         "Updated": "2014-02-12T07:58:32.510Z"
//		      },
//		      {
//		         "Created": "2014-02-11T13:44:11.053Z",
//		         "Deleted": null,
//		         "StatusID": 2,
//		         "StatusNo": "2         ",
//		         "Type": "Utl�n",
//		         "Updated": "2014-02-12T07:58:32.510Z"
//		      },
//		      {
//		         "Created": "2014-02-11T13:44:00.170Z",
//		         "Deleted": null,
//		         "StatusID": 1,
//		         "StatusNo": "1         ",
//		         "Type": "Inn p� lager",
//		         "Updated": "2014-02-12T07:58:32.510Z"
//		      },
//		      {
//		         "Created": null,
//		         "Deleted": null,
//		         "StatusID": 0,
//		         "StatusNo": null,
//		         "Type": "OffsetRow",
//		         "Updated": "2014-02-12T07:58:32.510Z"
//		      }
//		   ]
//		};
//}
//
//
//function getStockStatus(lastSync, isInitial){	
//
//}
//
//function addStockStatus(param1){
//	//WL.Logger.error('addStockStatus');	
//	WL.Logger.warn('addStockStatus: ' +param1);
//		
//
//}
//
//function replaceStockStatus(param1){
//	
//}
//function deleteStockStatus(param1){
//	
//}
//
//function getStorages(lastSync, isInitial, topLocationID){
//	return {
//		   "isSuccessful": true,
//		   "resultSet": [
//		      {
//		         "Barcode": null,
//		         "CanHoldStock": false,
//		         "Created": "2014-02-04T13:00:38.980Z",
//		         "Deleted": null,
//		         "Description": "Lager",
//		         "Name": "Lager",
//		         "StorageID": 1,
//		         "StorageNo": "RI336",
//		         "StorageParentID": null,
//		         "Updated": "2014-02-04T13:00:38.980Z"
//		      },
//		      {
//		         "Barcode": null,
//		         "CanHoldStock": false,
//		         "Created": "2014-02-19T13:42:54.677Z",
//		         "Deleted": null,
//		         "Description": "Lager hall 2",
//		         "Name": "Lager 2",
//		         "StorageID": 6,
//		         "StorageNo": "RI338-02",
//		         "StorageParentID": 1,
//		         "Updated": "2014-02-04T13:01:30.277Z"
//		      },
//		      {
//		         "Barcode": null,
//		         "CanHoldStock": false,
//		         "Created": "2014-02-04T13:01:30.277Z",
//		         "Deleted": null,
//		         "Description": "Lager hall 3",
//		         "Name": "Lager 3",
//		         "StorageID": 3,
//		         "StorageNo": "RI338",
//		         "StorageParentID": 1,
//		         "Updated": "2014-02-04T13:01:30.277Z"
//		      },
//		      {
//		         "Barcode": null,
//		         "CanHoldStock": true,
//		         "Created": "2014-02-19T13:47:43.393Z",
//		         "Deleted": null,
//		         "Description": "Hylle lager hall 1",
//		         "Name": "Hylle 010303",
//		         "StorageID": 9,
//		         "StorageNo": "L01H03R03",
//		         "StorageParentID": 7,
//		         "Updated": "2014-02-19T13:47:43.393Z"
//		      },
//		      {
//		         "Barcode": null,
//		         "CanHoldStock": true,
//		         "Created": "2014-02-19T14:03:45.030Z",
//		         "Deleted": null,
//		         "Description": "Hylle lager hall 1",
//		         "Name": "Hylle 010403",
//		         "StorageID": 10,
//		         "StorageNo": "L01H04R03",
//		         "StorageParentID": 7,
//		         "Updated": "2014-02-19T14:03:45.030Z"
//		      },
//		      {
//		         "Barcode": null,
//		         "CanHoldStock": true,
//		         "Created": "2014-02-19T14:15:19.487Z",
//		         "Deleted": null,
//		         "Description": null,
//		         "Name": "Hylle 010404",
//		         "StorageID": 11,
//		         "StorageNo": "L01H04R04",
//		         "StorageParentID": 10,
//		         "Updated": "2014-02-19T14:15:19.487Z"
//		      },
//		      {
//		         "Barcode": null,
//		         "CanHoldStock": true,
//		         "Created": "2014-02-19T13:45:53.000Z",
//		         "Deleted": null,
//		         "Description": "Hylle lager hall 1",
//		         "Name": "Hylle 010203",
//		         "StorageID": 8,
//		         "StorageNo": "L01H02R03",
//		         "StorageParentID": 7,
//		         "Updated": "2014-03-04T13:38:19.191Z"
//		      },
//		      {
//		         "Barcode": null,
//		         "CanHoldStock": false,
//		         "Created": "2014-02-19T13:44:48.000Z",
//		         "Deleted": null,
//		         "Description": "Lager hall 1",
//		         "Name": "Lager 1",
//		         "StorageID": 7,
//		         "StorageNo": "1H3B1",
//		         "StorageParentID": 1,
//		         "Updated": "2014-03-10T13:25:05.553Z"
//		      },
//		      {
//		         "Barcode": null,
//		         "CanHoldStock": null,
//		         "Created": null,
//		         "Deleted": null,
//		         "Description": null,
//		         "Name": "OffsetRow",
//		         "StorageID": 0,
//		         "StorageNo": null,
//		         "StorageParentID": null,
//		         "Updated": "2014-03-10T13:25:05.553Z"
//		      }
//		   ]
//		};
//}
//
//

