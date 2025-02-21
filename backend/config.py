import os

class Config:
    def __init__(self):
        self.Username = "sa"  # Replace with your DB username
        self.Password = "Wu8813505"  # Replace with your DB password
        self.Server = "localhost"  # Double backslashes for escape
        self.Data_Base = "TutorialDB"
        self.Driver = "ODBC Driver 17 for SQL Server"
        
    def config(self):
        return f"mssql+pyodbc://{self.Username}:{self.Password}@{self.Server}/{self.Data_Base}?driver={self.Driver}"
    
