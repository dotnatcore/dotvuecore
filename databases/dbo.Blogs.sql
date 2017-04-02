CREATE TABLE [dbo].[Blogs]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Title] NVARCHAR(50) NULL, 
    [SubTitle] NVARCHAR(50) NULL, 
    [AllowsComments] BIT NULL, 
    [CreatedAt] INT NULL
)
