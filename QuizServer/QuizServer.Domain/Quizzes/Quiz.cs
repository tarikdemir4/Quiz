﻿using QuizServer.Domain.QuizDetails;
using QuizServer.Domain.Shared;

namespace QuizServer.Domain.Quizes;
public sealed class Quiz : Entity
{
    public Quiz(Title title, RoomNumber roomNumber)
    {
        Title = title;
        RoomNumber = roomNumber;
    }
    public Title Title { get; private set; }
    public RoomNumber RoomNumber { get; private set; }
    public IReadOnlyCollection<QuizDetail> Details { get; private set; } = default!;
    public void ChangeTitle(Title title)
    {
        Title = title;
    }
    public void ChangeRoomNumber(RoomNumber roomNumber)
    {
        RoomNumber = roomNumber;
    }
}
