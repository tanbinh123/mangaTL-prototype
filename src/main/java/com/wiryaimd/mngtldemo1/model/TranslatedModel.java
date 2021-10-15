package com.wiryaimd.mngtldemo1.model;

import java.util.UUID;

public class TranslatedModel {

    private int id;

    private UUID groupId;

    private String filename, img;
    private String tlDate;

    public TranslatedModel(){}

    public TranslatedModel(int id, UUID groupId, String filename, String img, String tlDate) {
        this.id = id;
        this.groupId = groupId;
        this.filename = filename;
        this.img = img;
        this.tlDate = tlDate;
    }

    public int getId() {
        return id;
    }

    public UUID getGroupId() {
        return groupId;
    }

    public String getFilename() {
        return filename;
    }

    public String getImg() {
        return img;
    }

    public String getTlDate() {
        return tlDate;
    }
}
