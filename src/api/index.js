import path from "./path";

export default {
    async getLogin() {
        try {
            return path.baseURL + path.login;
        } catch (error) {
            throw error;
        }
    },
    async getLogout(){
        try {
            return path.baseURL + path.logout;
        } catch (error) {
            throw error;
        }
    },

    async getUserInfo(){
        try {
            return path.baseURL + path.userinfo;
        } catch (error) {
            throw error;
        }
    },

    async getAllCompany(){
        try {
            return path.baseURL + path.getAllCompany;
        } catch (error) {
            throw error;
        }
    },

    async getCompanyById(){
        try {
            return path.baseURL + path.getCompanyById;
        } catch (error) {
            throw error;
        }
    },

    async updateCompanyById(){
        try {
            return path.baseURL + path.updateCompanyById;
        } catch (error) {
            throw error;
        }
    },

    async getAllWarehouse(){
        try {
            return path.baseURL + path.getAllWarehouse;
        } catch (error) {
            throw error;
        }
    },

    async getWarehouseById(){
        try {
            return path.baseURL + path.getWarehouseById;
        } catch (error) {
            throw error;
        }
    },

    async updateWarehouseById(){
        try {
            return path.baseURL + path.updateWarehouseById;
        } catch (error) {
            throw error;
        }
    },

    async getAllHost(){
        try {
            return path.baseURL + path.getAllHost;
        } catch (error) {
            throw error;
        }
    },

    async getHostById(){
        try {
            return path.baseURL + path.getHostById;
        } catch (error) {
            throw error;
        }
    },

    async updateHostById(){
        try {
            return path.baseURL + path.updateHostById;
        } catch (error) {
            throw error;
        }
    },

    async getAllMeter(){
        try {
            return path.baseURL + path.getAllMeter;
        } catch (error) {
            throw error;
        }
    },

    async getMeterById(){
        try {
            return path.baseURL + path.getMeterById;
        } catch (error) {
            throw error;
        }
    },

    async updateMeterById(){
        try {
            return path.baseURL + path.updateMeterById;
        } catch (error) {
            throw error;
        }
    },

    async addCompany(){
        try {
            return path.baseURL + path.addCompany;
        } catch (error) {
            throw error;
        }
    },

    async addWarehouse(){
        try {
            return path.baseURL + path.addWarehouse;
        } catch (error) {
            throw error;
        }
    },

    async addHost(){
        try {
            return path.baseURL + path.addHost;
        } catch (error) {
            throw error;
        }
    },

    async addMeter(){
        try {
            return path.baseURL + path.addMeter;
        } catch (error) {
            throw error;
        }
    },

    async deleteCompanyByCompanyNumber(){
        try {
            return path.baseURL + path.deleteCompanyByCompanyNumber;
        } catch (error) {
            throw error;
        }
    },

    async deleteWarehouseByWarehouseNumber(){
        try {
            return path.baseURL + path.deleteWarehouseByWarehouseNumber;
        } catch (error) {
            throw error;
        }
    },

    async deleteHostByHostNumber(){
        try {
            return path.baseURL + path.deleteHostByHostNumber;
        } catch (error) {
            throw error;
        }
    },

    async deleteMeterByMeterNumber(){
        try {
            return path.baseURL + path.deleteMeterByMeterNumber;
        } catch (error) {
            throw error;
        }
    },

    async getHostHistoryLastDay(){
        try {
            return path.baseURL + path.getHostHistoryLastDay;
        } catch (error) {
            throw error;
        }
    },

    async getMeterHistoryLastDay(){
        try {
            return path.baseURL + path.getMeterHistoryLastDay;
        } catch (error) {
            throw error;
        }
    },

    async downloadAllHostHistoryCSV(){
        try {
            return path.baseURL + path.downloadAllHostHistoryCSV;
        } catch (error) {
            throw error;
        }
    },

    async downloadAllMeterHistoryCSV(){
        try {
            return path.baseURL + path.downloadAllMeterHistoryCSV;
        } catch (error) {
            throw error;
        }
    },

    async uploadHostHistory(){
        try {
            return path.baseURL + path.uploadHostHistory;
        } catch (error) {
            throw error;
        }
    },

    async uploadMeterHistory(){
        try {
            return path.baseURL + path.uploadMeterHistory;
        } catch (error) {
            throw error;
        }
    }
};
