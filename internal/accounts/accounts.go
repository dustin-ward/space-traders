package accounts

import (
	"log"

	"github.com/dustin-ward/space-traders/internal/app"
	"github.com/dustin-ward/space-traders/internal/factions"
)

type Account struct {
	Callsign string `json:"callsign"`
	Faction factions.Faction `json:"faction"`
	Token string `json:"token"`
}

func (a *app.App) GetAccounts() ([]Account, error) {
	return a.accounts, nil
}

func (a *app.App) CreateAccount(callsign string, faction factions.Faction) error {
	log.Println("CREATE ACCOUNT:", callsign, faction.Symbol)
	a.accounts = append(a.accounts, Account{
		Callsign: callsign,
		Faction: faction,
		Token: "TESTTOKEN",
	})
	return nil
}

func (a *app.App) ResetAllAccounts() {
	log.Println("Resetting all accounts...")
	a.accounts = make([]Account,0)
}
