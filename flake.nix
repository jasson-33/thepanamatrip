{
  description = "ThePanamaTrip App development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      supportedSystems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forAllSystems = f: nixpkgs.lib.genAttrs supportedSystems (system: f {
        pkgs = import nixpkgs { inherit system; };
      });
    in
    {
      devShells = forAllSystems ({ pkgs }: {
        default = pkgs.mkShell {
          buildInputs = with pkgs; [ bun nodejs_26 ];
          shellHook = ''
            echo "ThePanamaTrip App Development Environment"
            echo "Node: $(node --version)"
            echo "Bun: $(bun --version)"
          '';
        };
      });
    };
}
