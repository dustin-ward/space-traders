package app

import (
	"github.com/dustin-ward/space-traders/internal/factions"
)

func (a *App) GetFactions() ([]factions.Faction, error) {
	return factions.GetFactions()
}
