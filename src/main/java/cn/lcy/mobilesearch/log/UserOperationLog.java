package cn.lcy.mobilesearch.log;

public class UserOperationLog extends Log {

    /**
     * 操作代码 相当于谓语
     */
    private int operationCode;

    /**
     * 操作的属性，如操作来源于本地　还是第三方调用
     */
    private String[] operationAttr = null;

    /**
     * 操作对象 相当于宾语
     */
    private int operationObject;

    /**
     * 操作对象标识符
     */
    private String objectId;

    public int getOperationCode() {
        return operationCode;
    }

    public void setOperationCode(int operationCode) {
        this.operationCode = operationCode;
    }

    public String[] getOperationAttr() {
        return operationAttr;
    }

    public void setOperationAttr(String[] operationAttr) {
        this.operationAttr = operationAttr;
    }

    public int getOperationObject() {
        return operationObject;
    }

    public void setOperationObject(int operationObject) {
        this.operationObject = operationObject;
    }

    public String getObjectId() {
        return objectId;
    }

    public void setObjectId(String objectId) {
        this.objectId = objectId;
    }

    public String toString() {
        String retStr = "";
        retStr += super.toString() + "#" + operationCode + "#";
        if (operationAttr != null) {
            for (int i = 0; i < operationAttr.length; i++) {
                retStr += operationAttr[i] + "#";
            }
        }
        return retStr + operationObject + "#" + objectId;
    }
}