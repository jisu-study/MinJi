package com.mycompany.myproject.web.dto;

import com.mycompany.myproject.domain.posts.RecordContent;
import com.mycompany.myproject.domain.posts.Records;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Getter
@NoArgsConstructor
public class RecordsContentSaveRequestDto {

    private Long recordId;
    private Date date;
    private String content;
    private String hashtag;

    @Builder
    public RecordsContentSaveRequestDto(Long recordId, String content, String hashtag, Date date) {
        this.recordId = recordId;
        this.content = content;
        this.hashtag = hashtag;
        this.date = date;
    }

    public RecordContent toEntity(Records record) {
        return RecordContent.builder()
                .records(record)
                .date(date)
                .content(content)
                .hashtag(hashtag)
                .build();
    }
}
