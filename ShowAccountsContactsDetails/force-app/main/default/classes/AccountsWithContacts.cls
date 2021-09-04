public with sharing class AccountsWithContacts {
    public AccountsWithContacts() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAcc(){
        list<Account> acc=new List<Account>();
        try {
            acc=[select id,name,type,industry,phone from account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return acc;
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getCont(String accId){
        List<Contact> cont=new List<Contact>();
        System.debug('accId :'+accId);
        try {
            cont=[select id,name,email from Contact where AccountId=:accId];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        System.debug(cont);
        return cont;
    }
    @AuraEnabled
    public static Contact getContDetail(String contId){
        Contact cont;
        try {
            cont=[select id,name,email,title,phone from contact where id=:contId limit 1];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return cont;
    }
}