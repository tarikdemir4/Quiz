﻿using MediatR;
using TS.Result;

namespace QuizServer.Application.Quizzes.GetParticipantsByRoomNumber;
public sealed record GetParticipantsByRoomNumberQuery(
    int RoomNumber) : IRequest<Result<List<Participant>>>;
